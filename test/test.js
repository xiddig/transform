var assert = require("assert");
var kanpajs = require("../transform.js");

describe("Map Test", function() {
  it("should return map", function() {
    var data = {
      title: "List of websites",
      description: "This is a list of popular websites",
      data: {
        sites: [
          {
            name: "Google",
            url: "https://google.com",
          },
          {
            name: "Facebook",
            url: "https://facebook.com",
          },
          {
            name: "Twitter",
            url: "https://twitter.com",
          },
          {
            name: "Github",
            url: "https://github.com",
          },
        ],
      },
    };

    var template = {
      items: {
        "{{#each data.sites}}": {
          tag: "<a href='{{url}}'>{{name}}</a>",
        },
      },
    };

    var sel = kanpajs
      .select(data)
      .transformWith(template)
      .root();

    assert.equal(sel.items[0].tag, "<a href='https://google.com'>Google</a>");
  });
});
