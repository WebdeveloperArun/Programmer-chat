import multer from "multer";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Multer configuration
const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
 const fileTypes = /jpeg|jpg|png|gif/;
 const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
 const mimeType = fileTypes.test(file.mimetype);

 if (mimeType && extname) {
  return cb(null, true);
 } else {
  cb("Images only!");
 }
};

const upload = multer({
 storage,
 fileFilter,
 limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export default upload;
