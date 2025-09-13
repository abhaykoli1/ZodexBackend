const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const blogRoutes = require("./routes/blogRoutes");
const blogCategory = require("./routes/blog.ct.routes");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static uploads folder
app.use("/api/v1/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/blogCategory", blogCategory);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
