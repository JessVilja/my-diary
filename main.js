//glue
import { BloggPost } from "./bloggPost.js";

const post = new BloggPost();

function printPosts() {
  const sectionPosts = document.getElementById("blogposts-list");
  sectionPosts.innerHTML = " ";

  for (let i = 0; i < post.posts.length; i++) {
    const item = post.posts[i];

    const divElement = document.createElement("div");
    divElement.className = "blogpost-items";

    const liElement = document.createElement("li");
    liElement.className = "blogpost-item";

    const title = document.createElement("h2");
    const image = document.createElement("img");
    image.className = "blogpost-image";
    const content = document.createElement("p");

    title.textContent = item.title;
    image.src = item.image;
    content.textContent = item.content;

    liElement.append(title);
    liElement.append(image);
    liElement.append(content);

    divElement.append(liElement);
    sectionPosts.append(divElement);
  }
}

printPosts();
