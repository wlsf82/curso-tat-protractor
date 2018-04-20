const { assert } = require("chai");
const request = require("supertest");

const app = require("../../app");

const { parseTextFromHTML, seedItemToDatabase, findImageElementBySource } = require("../test-utils");
const { connectDatabaseAndDropData, diconnectDatabase } = require("../setup-teardown-utils");

describe("Server path: /", () => {

    beforeEach(connectDatabaseAndDropData);

    afterEach(diconnectDatabase);

    describe("GET", () => {
        it("renders an item with a title and image", async () => {
            const item = await seedItemToDatabase();

            const response = await request(app).get(`/`);
            const imageElement = findImageElementBySource(response.text, item.imageUrl);

            assert.include(parseTextFromHTML(response.text, ".item-title"), item.title);
            assert.equal(imageElement.src, item.imageUrl);
        });

        it("renders all items from the database", async () => {
            const firstItem = await seedItemToDatabase({title: "Item1"});
            const secondItem = await seedItemToDatabase({title: "Item2"});

            const response = await request(app).get(`/`);

            assert.include(parseTextFromHTML(response.text, `#item-${firstItem._id} .item-title`), firstItem.title);
            assert.include(parseTextFromHTML(response.text, `#item-${secondItem._id} .item-title`), secondItem.title);
        });
    });
});
