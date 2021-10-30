function calculateLoan() {
  // get the loan amount
  const loan_amount = document.getElementById("amount").value;
  // get loan duration
  const loan_duration = document.getElementById("duration").value;
  // get loan interest rate
  const interest_rate = document.getElementById("interest").value;
  // get loan repayment duration
  const repayment = document.getElementById("repayment").value;

  // some validation
  if (repayment < 3 || repayment > 24) {
    document.getElementById("repayment_error").innerHTML =
      "Repayment period must be between 3 - 24 months.";

    return;
  } else {
    document.getElementById("repayment_error").innerHTML = "";
  }

  /***
   *
   * I = P * R * T / 100;
   *
   *
   */

  const INTEREST = (loan_amount * interest_rate * loan_duration) / 100;
  const AMOUNT_OWED = parseInt(INTEREST, 10) + parseInt(loan_amount, 10);
  const MONTHLY_PAYMENT = AMOUNT_OWED / parseInt(repayment, 10);

  // display result
  document.getElementById("loan_result").style.display = "block";
  document.getElementById(
    "interest_result"
  ).innerHTML = `&#36;${INTEREST.toLocaleString()}`;
  document.getElementById(
    "amount_result"
  ).innerHTML = `&#36;${AMOUNT_OWED.toLocaleString()}`;
  document.getElementById(
    "monthly_result"
  ).innerHTML = `&#36;${MONTHLY_PAYMENT.toLocaleString()}`;
}

// toLocaleString()
// Query Selectors
