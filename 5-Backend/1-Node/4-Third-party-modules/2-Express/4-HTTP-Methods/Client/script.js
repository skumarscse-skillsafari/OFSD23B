const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:5000/api/v1/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(
      new FormData(document.querySelector("#productForm"))
    ),
  });
});
