// import Contact from "../model/contact.model.js";

// export const contact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ message: "Contact saved successfully!" });
//   } catch (err) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ error: "This email is already in use." });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

















