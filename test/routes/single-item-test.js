const { assert } = require("chai");
const request = require("supertest");

const app = require("../../app");

const { parseTextFromHTML, seedItemToDatabase } = require("../test-utils");
const { connectDatabaseAndDropData, diconnectDatabase } = require("../setup-teardown-utils");

describe("Server path: /items/:id", () => {
    beforeEach(connectDatabaseAndDropData);

    afterEach(diconnectDatabase);

    describe("GET", () => {
        it("renders title and description", async () => {
            const item = await seedItemToDatabase({
                title: "foo",
                description: "foo bar baz",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Foo_was_here.jpg"
            });

            const response = await request(app).get(`/items/${item._id}`);

            assert.equal(parseTextFromHTML(response.text, "#item-title"), item.title);
            assert.equal(parseTextFromHTML(response.text, "#item-description"), item.description);
        });
    });
});
