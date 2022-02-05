//klass för logik
export class BloggPost {
  constructor() {
    let date = new Date();
    const dateT = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    this.posts = [
      {
        title: "My beautiful morning",
        image: "assets/sunset.jpg",
        content: "Lorem ipsum...",
        date: dateT,
      },
      {
        title: "My beautiful morning",
        image: "assets/sunset.jpg",
        content: "Lorem ipsum...",
        date: dateT,
      },
      {
        title: "My beautiful morning",
        image: "assets/sunset.jpg",
        content: "Lorem ipsum...",
        date: dateT,
      },
    ];
  }
}
