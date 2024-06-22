import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const PORT = process.env.PORT;

const app = express();

//setup static folder
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger
app.use(logger);

// routes
app.use("/api/posts", posts);

//error handler
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`server running on http:localhost:${PORT}`));
