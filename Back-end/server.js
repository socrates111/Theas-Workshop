const express = require("express");
const nodemailer = require("nodemailer");
const sanitizeHtml = require("sanitize-html");
const helmet = require("helmet");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form endpoint
app.post("/contact", (req, res) => {
  const name = sanitizeHtml(req.body.name);
  const email = sanitizeHtml(req.body.email);
  const message = sanitizeHtml(req.body.message);

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `Contact Form - ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Email send error:", error);
      return res.status(500).json({ success: false, error: "Failed to send" });
    }
    console.log("✅ Email sent:", info.response);
    res.json({ success: true, message: "Email sent!" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
