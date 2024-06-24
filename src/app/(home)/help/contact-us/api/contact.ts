import type { NextApiRequest, NextApiResponse } from 'next';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body as FormData;

      // Here you can process the form data, e.g., save it to a database

      // For demonstration purposes, simply log the data
      console.log('Form Data:', { name, email, subject, message});

      // Respond with a success message
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing form:', error);
      res.status(500).json({ message: 'Failed to process form' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
