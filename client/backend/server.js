require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT;
const uri = process.env.ATLAS_URI;
// Rutas
const users = require("./routes/users");
const exercises = require("./routes/exercises");

app.use(cors());
app.use(express.json());
app.use("/exercises", exercises);
app.use("/users", users);

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB ..."))
  .catch((err) => console.error("Could not connetc to MongoDB !!!"));

// Listen on port 3900
app.listen(port, () => console.log(`Listening on port ${port} ....`));
