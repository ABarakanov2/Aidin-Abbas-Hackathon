const API = "http://localhost:8000/posts";

let inpName = $(".inp-name");
let inpLastName = $(".inp-lastname");
let inpEmail = $(".inp-email");
let inpImage = $(".inp-image");
let inpUser = $(".inp-username");
let addForm = $(".add-form");

addForm.on("submit", async (event) => {
  event.preventDefault();
  let name = inpName.val().trim();
  let lastName = inpLastName.val().trim();
  let email = inpEmail.val().trim();
  let image = inpImage.val().trim();
  let user = inpUser.val().trim();

  let newUser = {
    name: name,
    lastName: lastName,
    email: email,
    image: image,
    user: user,
  };
  for (let key in newUser) {
    if (!newUser[key]) {
      alert("Заполните все поля");
      return;
    }
  }
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  inpName.val("");
  inpLastName.val("");
  inpEmail.val("");
  inpImage.val("");
  inpUser.val("");
});
