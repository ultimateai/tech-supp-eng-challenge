const express = require("express");
const app = express();
const port = 8000;

app.use(express.static("public"));
app.use(express.json());

const sendExpense = require("./api/expense");

app.post("/expenseReport", (req, res) => {
  try {
    console.info(
      `Endpoint /expenseReport Received the following data, to be expensed: ${JSON.stringify(
        data
      )}`
    );
    sendExpense(everythingFromRequest);
    res.send({ submitted: true });
  } catch (error) {
    res.status(400).send({ submitted: false });
  }
});

app.get("/expenseReport2", (req, res) => {
  try {
    console.info(
      `Endpoint /expenseReport2 Received the following data, to be expensed: ${JSON.stringify(
        data
      )}`
    );
    const nameInput = req.body.nameValue;
    const emailInput = req.body.emailValue;
    const locationInput = req.body.locationValue;
    const data = { nameInput, emailInput, locationInput };
    const dataValid = sendExpense(data);
    res.send({ submitted: dataValid });
  } catch (error) {
    res.status(400).send({ submitted: false });
  }
});

app.listen(port, () => {
  console.log(`App start and listening on port ${port}!`);
});
