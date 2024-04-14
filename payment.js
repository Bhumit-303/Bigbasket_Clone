let deliveryAddress = JSON.parse(localStorage.getItem("address"));
document.querySelector("#addnew").innerText = deliveryAddress;

let accountDetails = [
  {
    cardNumber: "1224364860728496",
    validThru: "12/27",
    cvv: "377",
  },
];
localStorage.setItem("accountDetails", JSON.stringify(accountDetails));

function handleCardPayment() {
  let cardNumber = document.querySelector("#input1").value;
  let validThru = document.querySelector("#valiD").value;
  let cvv = document.querySelector("#cVV").value;

  let storedAccounts = JSON.parse(localStorage.getItem("accountDetails"));
  let validAccount = storedAccounts.find(
    (account) =>
      account.cardNumber === cardNumber &&
      account.validThru === validThru &&
      account.cvv === cvv
  );

  if (validAccount) {
    alert("OTP sent successfully.");
    window.location.replace("otp.html");
  } else {
    alert("Invalid card details.");
  }
}

document.querySelector("#PAY").addEventListener("click", function () {
  let CARD = document.querySelector("#input1").value;
  let VALID = document.querySelector("#valiD").value;
  let CVV = document.querySelector("#cVV").value;
  let acc = JSON.parse(localStorage.getItem("ACCOUNT"));
  if (acc[0].card == CARD && acc[0].valid == VALID && acc[0].cvv == CVV) {
    alert("otp sent successfully");
    window.location.replace("otp.html");
  } else {
    alert("Invalid card detail");
  }
});


function handleNetbankingPayment() {
  alert("Redirecting to netbanking portal...");
}
document.querySelector("#netbankingBtn").addEventListener("click", handleNetbankingPayment);

function handleUpiPayment() {
  alert("Redirecting to UPI payment...");
}

document.querySelector("#upiBtn").addEventListener("click", handleUpiPayment);

function handleWalletPayment() {
  alert("Redirecting to wallet payment...");
}

document.querySelector("#walletBtn").addEventListener("click", handleWalletPayment);

function handleCashOnDelivery() {
  alert("Proceeding with Cash/Card on Delivery...");
  window.location.replace("order_confirmation.html");
}

document.querySelector("#cashOnDeliveryBtn").addEventListener("click", handleCashOnDelivery);

function applyVoucher() {
  let voucherCode = document.querySelector("#VAl").value;
  if (voucherCode === "big123") {
    let totalPrice = parseFloat(document.querySelector("#PR").innerText);
    let discountedPrice = totalPrice * 0.8;
    let savings = totalPrice - discountedPrice;

    document.querySelector("#BR").innerText = discountedPrice.toFixed(2);
    document.querySelector("#TR").innerText = savings.toFixed(2);

    alert("Hurray..!! 20% discount applicable.");
  } else {
    alert("Invalid voucher code.");
  }
}

document.querySelector("#app").addEventListener("click", applyVoucher);

let totalAmount = 0;
let itemsInCart = JSON.parse(localStorage.getItem("TOTAL"));
for (let itemPrice of itemsInCart) {
  totalAmount += itemPrice;
}
document.querySelector("#PR").innerText = totalAmount.toFixed(2);
document.querySelector("#BR").innerText = totalAmount.toFixed(2);


