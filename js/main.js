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

//! read

let postsList = $(".posts-list");

async function getPosts() {
  const response = await fetch(`${api}?q=${searchValue}`);
  const data = await response.json();

  // let first = currentPage * postsPerPage - postsPerPage;
  // let last = currentPage * postsPerPage;

  const currentPosts = data.slice(); //(first, last);
  // lastPage = Math.ceil(data.length / postsPerPage);

  // if (currentPage === 1) {
  //   prevBtn.addClass("disabled");
  // } else {
  //   prevBtn.removeClass("disabled");
  // }

  // if (currentPage === lastPage) {
  //   nextBtn.addClass("disabled");
  // } else {
  //   nextBtn.removeClass("disabled");
  // }

  // postsList.html("");
  // currentPosts.forEach((item) => {
  //   postsList.append(`

  //     `);
  // });
}

getPosts();
