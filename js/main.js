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

//! read

let postsList = $(".posts-list");

async function getPosts() {
  const response = await fetch(API);
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
