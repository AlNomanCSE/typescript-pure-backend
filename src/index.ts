import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./models/User";
const app = express();
const PORT = 5000;

app.use(express.json());
type CreateUserRequest = {
  name: string;
};
app.post(
  "/user",
  async (req: Request<any, any, CreateUserRequest>, res: Response) => {
    const newUser = await User.create({
      name: req.body.name,
    });
    res.json(newUser);
  }
);

mongoose.connect("mongodb://localhost:27017/tsbackend").then(() =>
  app.listen(PORT, () => {
    console.log(`Server is running on ...${PORT}`);
  })
);




