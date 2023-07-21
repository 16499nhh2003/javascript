<script src="https://cdn.jsdelivr.net/npm/big.js@5.2.2/big.min.js"></script>;
// Replace the existing code to use Big objects
const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

$("#range-mobile").on("change", () => {
  let rangeMobile = $("#range-mobile").val();
  let showPrice = new Big(rangeMobile); // Create a Big object with the rangeMobile value
  $("#price-range").html(VND.format(showPrice.toFixed(0))); // Use toFixed(0) to get the rounded integer value and format it
});

let priceProduct = $(".price-product");
for (let i = 0; i < priceProduct.length; i++) {
  let priceValue = new Big(priceProduct[i].innerHTML); // Create a Big object with the price value
  priceProduct[i].innerText = VND.format(priceValue.toFixed(0)); // Use toFixed(0) to get the rounded integer value and format it
}
asdnasjdnk