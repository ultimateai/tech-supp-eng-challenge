const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(morgan("combined"));
app.use(express.json());

const sendExpense = require("./api/expense");

app.get("/home", (_, res) => {
  res.sendFile("public/home.html", { root: __dirname });
});

app.post("/expenseReportBeta", (req, res) => {
  try {
    console.info(
      `Endpoint /expenseReportBeta Received the following data, to be expensed: ${JSON.stringify(
        data
      )}`
    );
    sendExpense(req.body);
    console.info("worked!");
    res.send({ submitted: true });
  } catch (error) {
    res.status(400).send({ submitted: false });
  }
});

app.post("/expenseReportProduction", (req, res) => {
  try {
    console.info(
      `Endpoint /expenseReportProduction Received the following data, to be expensed: ${JSON.stringify(
        req.body.data
      )}`
    );
    const nameInput = req.body.nameValue;
    const emailInput = req.body.emailValue;
    const locationInput = req.body.locationValue;
    const data = { nameInput, emailInput, locationInput };
    const dataValid = sendExpense(data);
    console.info(dataValid);
    res.send({ submitted: dataValid });
  } catch (error) {
    res.status(400).send({ submitted: false });
  }
});

app.listen(port, () => {
  console.log(`App start and listening on port ${port}!`);
});
