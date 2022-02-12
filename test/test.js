//globala funktioner från mocha: describe, it
//globala asserts finns i chai objektet

import { BlogPost } from "../blogpost.js";

const assert = chai.assert;

describe("addBlogPost", function () {
  it("lägger till en ny blogpost", function () {
    /*Storage.prototype.stashContent = function (key) {
      // 'this' är det våran localStorage eller sessionStoragez
      const keyValuePairs = JSON.parse(this.getItem(key));
      this.clear();
      return keyValuePairs;
    };

    Storage.prototype.restoreContent = function (content) {
      // 'this' är det våran localStorage eller sessionStorage
      this.clear();
      for (let [key, value] of content) {
        this.setItem(key, value);
      }
    };*/

    const post = new BlogPost();
    //const content = localStorage.stashContent("blogposts");

    post.addBlogPost("Test 1", "assets/sunset.jpg", "Lorem ipsum");

    const lastPost = post.posts[post.posts.length - 1];
    // console.log(Object.entries(localStorage));
    assert.equal(lastPost.title, "Test 1");

    //localStorage.restoreContent(content);
  });
});
