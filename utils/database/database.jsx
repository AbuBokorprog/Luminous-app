import { mongoose } from "mongoose";
import cors from "cors";
export async function database() {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.kq57d4a.mongodb.net/luminous?retryWrites=true&w=majority`
    );
    console.log(connection);
  } catch (error) {
    console.log("Failed to connect");
    console.log(error);
  }
}
