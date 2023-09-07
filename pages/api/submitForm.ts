// pages/api/submitForm.js

import { NextApiRequest, NextApiResponse } from 'next';
import validationSchema from '../../validationSchema'; // Import your validation schema here
import { dbConnect } from '../../mongoose'; // Import the Mongoose configuration
import FormSubmit from '../../models/FormData'; // Import the Mongoose model

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, phoneNumber, consent } = req.body;
      await dbConnect();
      console.log(req.body, 'body-check') 

      const formData = new FormSubmit({
        name,
        email,
        phoneNumber,
        consent,
      });
      console.log("formData", formData);
      await formData.save();


      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      if (error) {
        const validationErrors = {};
        // error.inner.forEach((err) => {
        //   validationErrors[err.path] = err.message;
        // });

        console.log("error", error)
        return res.status(400).json(validationErrors);
      } else {
        // Handle other errors
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
