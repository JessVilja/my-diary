//klass för logik
export class BlogPost {
  constructor() {
    if (this.readPostFromStorage != null) {
      this.posts = this.readPostFromStorage();
    } else {
      this.posts = [];
    }
  }

  /**
   * Add blog post
   * @param {string} title Blog entry title
   * @param {string} img adress of image
   * @param {string} content blog entry content
   */
  addBlogPost(title, img, content) {
    let time = new Date();
    let entryTime = `${time.getFullYear()}/${
      time.getMonth() + 1
    }/${time.getDate()}`;
    //[time.getFullYear(), time.getMonth() + 1, time.getDate()];

    const newBlog = {
      title: title,
      image: img,
      content: content,
      date: entryTime,
    };

    this.posts.push(newBlog);
    this.savePost();
  }
  /*
  saveLinks() {
    window.localStorage.setItem("links", JSON.stringify(this));
  } */

  savePost() {
    window.localStorage.setItem("blogposts", JSON.stringify(this.posts));
  }

  readPostFromStorage() {
    return JSON.parse(window.localStorage.getItem("blogposts"));
  }

  deletePost(selectedPost) {
    const postsArr = this.readPostFromStorage();
    postsArr.splice(selectedPost, 1);
    this.posts = postsArr;
    this.savePost();
  }
}
