const { assert } = require("chai");
const request = require("supertest");

const app = require("../../app");

const { parseTextFromHTML } = require("../test-utils");

describe("Server path: /foobarbaz", () => {
    describe("GET", () => {
        it("renders a page not found template", async () => {
            const response = await request(app).get("/foobarbaz");

            assert.equal(parseTextFromHTML(response.text, "#page-not-found h1"), "Esta página não existe");
        });
    });
});
