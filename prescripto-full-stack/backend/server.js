import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './routes/formRoutes.js'; // Correct relative path for ES Modules

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use routes
app.use('/api', formRoutes);  // Ensure the correct route

// Set up the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
