//glue
import { BlogPost } from "./blogpost.js";

const post = new BlogPost();

if (post.readPostFromStorage() != null) {
  printPosts();
  printLinksSidebar();
}

function printLinksSidebar() {
  const asideEl = document.getElementById("aside-post-list");
  asideEl.innerHTML = " ";

  const savedPost = post.readPostFromStorage();

  for (let i = 0; i < savedPost.length; i++) {
    const item = savedPost[i];

    const pEl = document.createElement("p");
    const aEl = document.createElement("a");
    aEl.href = "#" + i;
    const linkText = document.createTextNode(`${item.date}`);
    aEl.append(pEl);
    aEl.append(linkText);
    asideEl.append(aEl);
  }
}

function printPosts() {
  const sectionPosts = document.getElementById("blogposts-list");
  sectionPosts.innerHTML = " ";

  const savedPost = post.readPostFromStorage();

  for (let i = 0; i < savedPost.length; i++) {
    const item = savedPost[i];

    const divElement = document.createElement("div");
    divElement.className = "blogpost-items mb-3";
    divElement.id = i;

    const liElement = document.createElement("li");
    liElement.className = "blogpost-item text-center";

    const title = document.createElement("h2");
    const image = document.createElement("img");
    image.className = "blogpost-image";
    const content = document.createElement("p");

    const dateEl = document.createElement("span");
    const removeBlogpost = document.createElement("button");
    removeBlogpost.className = "btn btn-outline-dark removeBtn";
    removeBlogpost.id = i;

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

document.querySelector("#post-blogpost-btn").onclick = function () {
  const title = document.querySelector("#blogpost-title").value;
  const img = document.querySelector("#blogpost-image").value;
  const content = document.querySelector("#blogpost-content").value;

  post.addBlogPost(title, img, content);

  printPosts();
  printLinksSidebar();
};

document
  .getElementById("blogposts-list-section")
  .addEventListener("click", function (event) {
    let target = event.target;

    if (target.className == "btn btn-outline-dark removeBtn") {
      const index = target.id;
      post.deletePost(index);
      let postItem = target.closest(".blogpost-items");
      postItem.remove();

      printPosts();
      printLinksSidebar();
    }
  });
