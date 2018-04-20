const { assert } = require("chai");
const request = require("supertest");

const app = require("../../app");
const Item = require("../../models/item");

const { parseTextFromHTML, buildItemObject } = require("../test-utils");
const { connectDatabaseAndDropData, diconnectDatabase } = require("../setup-teardown-utils");

describe("Server path: /items/create", () => {
    const itemToCreate = buildItemObject();

    beforeEach(connectDatabaseAndDropData);

    afterEach(diconnectDatabase);

    describe("GET", () => {
        it("renders empty input fields", async () => {
            const response = await request(app).get("/items/create");

            assert.equal(parseTextFromHTML(response.text, "#title-input"), "");
            assert.equal(parseTextFromHTML(response.text, "#description-input"), "");
            assert.equal(parseTextFromHTML(response.text, "#imageUrl-input"), "");
        });
    });

    describe("POST", () => {
        it("creates a new item", async () => {
            const itemToCreate = await buildItemObject();

            const response = await request(app)
                .post("/items/create")
                .type("form")
                .send(itemToCreate);

            const createdItem = await Item.findOne(itemToCreate);

            assert.isOk(createdItem, "Item was not created successfully in the database");
        });

        it("redirects to home after creating an item", async () => {
            const itemToCreate = await buildItemObject();

            const response = await request(app)
                .post("/items/create")
                .type("form")
                .send(itemToCreate);

            assert.equal(response.status, 302);
            assert.equal(response.headers.location, "/");
        });

        it("should show an error message when trying to create an item without a title", async () => {
            const invalidItemToCreate = {
                description: "foobarbaz",
                imageUrl: "https://foo.bar.baz"
            };

            const response = await request(app)
                .post("/items/create")
                .type("form")
                .send(invalidItemToCreate);

            const items = await Item.find({});

            assert.equal(items.length, 0);
            assert.equal(response.status, 400);
            assert.include(parseTextFromHTML(response.text, "form"), "required");
        });

        it("should show an error message when trying to create an item without a description", async () => {
            const invalidItemToCreate = {
                title: "bar",
                imageUrl: "https://bar.foo"
            };

            const response = await request(app)
                .post("/items/create")
                .type("form")
                .send(invalidItemToCreate);

            const items = await Item.find({});

            assert.equal(items.length, 0);
            assert.equal(response.status, 400);
            assert.include(parseTextFromHTML(response.text, "form"), "required");
        });

        it("should show an error message when trying to create an item without an image url", async () => {
            const invalidItemToCreate = {
                title: "baz",
                description: "bah baz"
            };

            const response = await request(app)
                .post("/items/create")
                .type("form")
                .send(invalidItemToCreate);

            const items = await Item.find({});

            assert.equal(items.length, 0);
            assert.equal(response.status, 400);
            assert.include(parseTextFromHTML(response.text, "form"), "required");
        });
    });
});
