//glue
import { BlogPost } from "./blogpost.js";

const post = new BlogPost();

function printPosts() {
  const sectionPosts = document.getElementById("blogposts-list");
  sectionPosts.innerHTML = " ";

  for (let i = 0; i < post.posts.length; i++) {
    const item = post.posts[i];

    const divElement = document.createElement("div");
    divElement.className = "blogpost-items mb-3";

    const liElement = document.createElement("li");
    liElement.className = "blogpost-item text-center";

    const title = document.createElement("h2");
    const image = document.createElement("img");
    image.className = "blogpost-image";
    const content = document.createElement("p");

    const dateEl = document.createElement("span");
    //dateEl.className = "d-flex justify-content-start";

    const removeBlogpost = document.createElement("button");
    removeBlogpost.className = "btn btn-outline-dark";

    title.textContent = item.title;
    image.src = item.image;
    content.textContent = item.content;
    dateEl.textContent = item.date;
    removeBlogpost.innerHTML = "x";

    liElement.append(image);
    liElement.append(title);

    liElement.append(content);
    liElement.append(dateEl);
    liElement.append(removeBlogpost);

    divElement.append(liElement);
    sectionPosts.append(divElement);
  }
}

printPosts();

document.querySelector("#post-blogpost-btn").onclick = function () {
  /** @type {HTMLInputElement} */
  const inputTitle = document.querySelector(
    "#blogpost-title-container > input"
  );
  const blogPostTitle = inputTitle.value;

  const inputImg = document.querySelector("#blogpost-image");
  const blogImage = inputImg.value;

  const inputContent = document.querySelector("#blogpost-content");
  const blogContent = inputContent.value;

  post.addBlogPost(blogPostTitle, blogImage, blogContent);

  printPosts();
};
