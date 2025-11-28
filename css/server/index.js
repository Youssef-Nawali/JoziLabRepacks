import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/jozilab_feedback", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));

// Schema
const FeedbackSchema = new mongoose.Schema({
  name: String,
  msg: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Model
const Feedback = mongoose.model("Feedback", FeedbackSchema);

// Routes
app.get("/feedback", async (req, res) => {
  const data = await Feedback.find().sort({ createdAt: -1 });
  res.json(data);
});

app.post("/feedback", async (req, res) => {
  const { name, msg } = req.body;
  if (!name || !msg) return res.status(400).json({ error: "Missing fields" });

  const fb = new Feedback({ name, msg });
  await fb.save();

  res.json({ success: true });
});

// Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
