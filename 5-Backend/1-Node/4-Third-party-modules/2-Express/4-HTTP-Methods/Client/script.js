const submit = document.querySelector("#submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  let res = await fetch("http://localhost:5000/api/v1/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(
      new FormData(document.querySelector("#productForm"))
    ),
  });
  // console.log(res);
  if (res.status === 201) {
    alert("Products added successfully");
    window.location.reload();
  }
});
