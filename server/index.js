const express = require("express");
const cors = require("cors");
const ChefData = require("./data/chef.json");
/* CONFIGARATION */
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send({
    message: "Hello From Cuisine Masters!",
  });
});

app.get("/api/v1/chef", (req, res) => {
  res.send(ChefData);
});

app.get("/api/v1/chef/:id", (req, res) => {
  const id = req.params.id;
  const chef = ChefData.find((chef) => chef.id === id);
  if (!chef) {
    return res.status(404).send({ message: "not found" });
  }
  res.send(chef);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
