import express from "express";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express()

//send data to db
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), function (req, res){
  res.status(200).json("image has been uploaded")
})

//postroutes for post
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/posts", postRoutes)

//port number
app.listen(8800, () => {
    console.log("Connected!");
  });