import { BlogPost } from "../blogpost.js";

const assert = chai.assert;

describe("addBlogPost", function () {
  it("adding a new blog post", function () {
    Storage.prototype.stashContent = function () {
      const keyValuePairs = Object.entries(this);
      this.clear();
      return keyValuePairs;
    };

    Storage.prototype.restoreContent = function (content) {
      this.clear();
      for (let [key, value] of content) {
        this.setItem(key, value);
      }
    };

    const post = new BlogPost();
    const content = localStorage.stashContent();

    post.addBlogPost("Test 1", "assets/sunset.jpg", "Lorem ipsum");
    const lastPost = post.posts[post.posts.length - 1];

    assert.equal(lastPost.title, "Test 1");

    const item = post.posts[0];

    assert.property(item, "title");
    localStorage.restoreContent(content);
  });
});
