//globala funktioner från mocha: describe, it
//globala asserts finns i chai objektet

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
    console.log(Object.entries(localStorage));
    const content = localStorage.stashContent();

    console.log(Object.entries(localStorage));
    post.addBlogPost("Test 1", "assets/sunset.jpg", "Lorem ipsum");
    const lastPost = post.posts[post.posts.length - 1];

    assert.equal(lastPost.title, "Test 1");

    const item = post.posts[0];

    assert.property(item, "title");
    localStorage.restoreContent(content);
  });
});
