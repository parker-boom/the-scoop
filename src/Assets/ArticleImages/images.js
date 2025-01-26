// Import all images with new naming scheme
import article1 from "./article1.png";
import article2 from "./article2.png";
import article3 from "./article3.jpg";
import article4 from "./article4.jpg";
import article5 from "./article5.png";
import article6 from "./article6.png";
import article7 from "./article7.png";
import article8 from "./article8.png";
import article9 from "./article9.png";
import article10 from "./article10.png";
import article11 from "./article11.png";

// Map using the exact names from articles.json to their imports
const articleImages = {
  "article1.png": article1,
  "article2.png": article2,
  "article3.jpg": article3,
  "article4.jpg": article4,
  "article5.png": article5,
  "article6.png": article6,
  "article7.png": article7,
  "article8.png": article8,
  "article9.png": article9,
  "article10.png": article10,
  "article11.png": article11,
};

// Debug log
Object.entries(articleImages).forEach(([key, value]) => {
  if (!value) {
    console.log(`Missing image for: ${key}`);
  }
});

export default articleImages;
