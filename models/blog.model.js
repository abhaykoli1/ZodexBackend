const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    bloggCategory: {
      type: String,
      required: [true, "Blog category is required"],
    },
    headline: {
      type: String,
      required: [true, "Blog headline is required"],
    },
    image: {
      type: String, // URL or file path of the image
      required: [true, "Blog image is required"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogSchema", BlogSchema);
