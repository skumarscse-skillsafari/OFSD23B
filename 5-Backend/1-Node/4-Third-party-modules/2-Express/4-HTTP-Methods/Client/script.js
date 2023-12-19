const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").value;
  fetch("http://localhost:5000/api/v1/products/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      price: price,
      category: category,
      image: image,
    }),
  });
});
