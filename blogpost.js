//klass för logik
export class BlogPost {
  constructor() {
    //let date = new Date();
    //const dateT = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    this.posts = [
      {
        title: "My beautiful morning",
        image: "assets/sunset.jpg",
        content: "Lorem ipsum...",
        date: this.time(),
      },
      {
        title: "My beautiful morning",
        image: "assets/sunset.jpg",
        content: "Lorem ipsum...",
        date: this.time(),
      },
      {
        title: "My beautiful morning",
        image: "assets/sunset.jpg",
        content: "Lorem ipsum...",
        date: this.time(),
      },
    ];
  }

  time() {
    let time = new Date();
    let entryTime = [time.getFullYear(), time.getMonth() + 1, time.getDate()];
    return entryTime;
  }
  /**
   * Add blog post
   * @param {string} title Blog entry title
   * @param {string} img adress of image
   * @param {string} content blog entry content
   */
  addBlogPost(title, img, content) {
    const newBlog = {
      title: title,
      image: img,
      content: content,
      date: this.time(),
    };

    this.posts.push(newBlog);
  }
}
