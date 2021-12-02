function sendExpense(data) {
  console.info(
    `Received the following data, to be expensed: ${JSON.stringify(data)}`
  );
  if (data.nameInput.length > 10) {
    throw new Error("Name is too long");
  }
  if (!data.locationInput.startsWith("P")) {
    throw new Error("Location needs to start with a P");
  }
  if (typeof data.emailInput !== "string") {
    throw new Error("Email needs to be a string");
  }

  console.info(
    `Received the following data, to be expensed: ${JSON.stringify(data)}`
  );

  // send expense to other server
  return true;
}

module.exports = sendExpense;
