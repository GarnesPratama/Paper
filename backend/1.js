// const getButton = document.getElementById("get");
// const postButton = document.getElementById("post");

// getButton.addEventListener("click", () => {
//   fetch("http://localhost:3000/get");
//   try {
//     (res) => res.json();
//     (resJSON) => console.log(resJSON);
//   } catch (error) {
//     (err) => console.log(err);
//   }
// });
// postButton.addEventListener("click", () => {
//   alert("Post");
// });

const getButton = document.getElementById("get");
const postButton = document.getElementById("post");

getButton.addEventListener("click", () => {
  fetch("http://localhost:4000/get")
    .then((res) => res.json())
    .then((resJSON) => console.log(resJSON))
    .catch((err) => console.log(err));
});

postButton.addEventListener("click", () => {
  fetch("http://localhost:4000/post", {
    method: "POST",
  })
    .then((res) => res.json())
    .then((resJSON) => console.log(resJSON))
    .catch((err) => console.log(err));
});
