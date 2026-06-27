const amount = document.getElementById("amount");
const gst = document.getElementById("gst");
const result = document.getElementById("result");

document.getElementById("forward").addEventListener("click", function () {

    let price = parseFloat(amount.value);

    if (isNaN(price)) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    let rate = parseFloat(gst.value);

    let gstAmount = (price * rate) / 100;
    let total = price + gstAmount;

    result.innerHTML = `
        Amount : ₹${price.toFixed(2)} <br>
        GST (${rate}%) : ₹${gstAmount.toFixed(2)} <br>
        Total : ₹${total.toFixed(2)}
    `;
});

document.getElementById("reverse").addEventListener("click", function () {

    let total = parseFloat(amount.value);

    if (isNaN(total)) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    let rate = parseFloat(gst.value);

    let basePrice = total / (1 + rate / 100);
    let gstAmount = total - basePrice;

    result.innerHTML = `
        Original Amount : ₹${basePrice.toFixed(2)} <br>
        GST (${rate}%) : ₹${gstAmount.toFixed(2)} <br>
        Total : ₹${total.toFixed(2)}
    `;
});