const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/test", (req, res) => {
  res.send({ message: "YOUR EXPRESSION IS CONNECTED TO REACT" });
});
