//klass för logik
/**
 *Class representing a blog post
 */
export class BlogPost {
  /**
   * Get posts from localStorage or create empty array
   */
  constructor() {
    if (this.readPostFromStorage() != null) {
      this.posts = this.readPostFromStorage();
    } else {
      this.posts = [];
    }
  }

  /**
   * Adds a new blog post to the blog
   * @param {string} title Blog post title to be added
   * @param {string} img Image to be added
   * @param {string} content Content to be added
   */
  addBlogPost(title, img, content) {
    let time = new Date();
    let entryTime = `${time.getFullYear()}/${
      time.getMonth() + 1
    }/${time.getDate()}`;

    const newBlog = {
      title: title,
      image: img,
      content: content,
      date: entryTime,
    };

    this.posts.push(newBlog);
    this.savePost();
  }

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
