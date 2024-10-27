import express from "express"
import cors from "cors";
import "dotenv/config"
import bodyParser from "body-parser";
import path from "path";
const app = express();

import catsRoutes from "./routes/cats.js"
import sheltersRoutes from "./routes/shelters.js"
import usersRoutes from "./routes/users.js"
import requestsRoutes from "./routes/requests.js"
import authRoutes from "./routes/login.js"


const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// routing cats
app.use("/cats", catsRoutes);
app.use("/shelters", sheltersRoutes);
app.use("/users", usersRoutes);
app.use("/requests", requestsRoutes);
app.use("/login", authRoutes);

// start listening on PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
