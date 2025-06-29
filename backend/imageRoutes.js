const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const imageRoutes = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Upload endpoint
imageRoutes.post("/upload-image", upload.single("image"), (req, res) => {
  res.json({
    imageUrl: `http://localhost:3000/uploads/${req.file.filename}`,
    imageName: req.file.filename
  });
});

// Delete endpoint
imageRoutes.delete("/delete-image/:filename", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).json({ error: "Failed to delete image" });
    res.json({ message: "Image deleted" });
  });
});

module.exports = imageRoutes;
