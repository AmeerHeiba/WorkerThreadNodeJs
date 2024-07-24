const express = require("express");


const app = express();

const usersRoutes = require("./routes/routes");
const blokingRoutes = require("./routes/blockingRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", usersRoutes);
app.use("/blocking", blokingRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
