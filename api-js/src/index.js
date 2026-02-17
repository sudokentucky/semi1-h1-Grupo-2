const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api.routes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", apiRoutes);
app.listen(PORT, () => {
  console.log(`API JS corriendo en puerto ${PORT}`);
});
