const API = "http://localhost:8000/posts";

let inpHeader = $(".inp-header");
let inpDesc = $(".inp-desc");
let inpImage = $(".inp-image");

let addForm = $(".add-form");

addForm.on("submit", async (event) => {
  event.preventDefault();
  let header = inpHeader.val().trim();
  let desc = inpDesc.val().trim();
  let image = inpImage.val().trim();

  let newUser = {
    header: header,
    desc: desc,
    image: image,
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
  inpHeader.val("");
  inpDesc.val("");
  inpImage.val("");
  getPosts();
});
