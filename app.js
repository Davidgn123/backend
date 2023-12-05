import express from "express";
import cors from "cors";
import "./src/database/db.js";
import morgan from "morgan";

import router from "./src/routes/routes.js"; 
import cookieParser from "cookie-parser";


import taskRoutes from "./src/routes/tasks.routes.js";




const app = express();

app.use(cors()); // Enable CORS
app.use(morgan("dev"))
app.use(express.json()); // Parse JSON requests
app.use(cookieParser());


//Define routes
app.use("/api", router);
app.use("/api", taskRoutes)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

