const Item = require("../../models/item");
const {assert} = require("chai");
const {mongoose, databaseUrl, options} = require("../../database");

describe("Model: Item", () => {
    beforeEach(async () => {
        await mongoose.connect(databaseUrl, options);
        await mongoose.connection.db.dropDatabase();
    });

    afterEach(async () => {
        await mongoose.disconnect();
    });

    describe("title", () => {
        it("is a String", () => {
            const titleAsNonString = 1;

            const item = new Item({
                title: titleAsNonString
            });

            assert.strictEqual(item.title, titleAsNonString.toString());
        });

        it("is required", () => {
            const item = new Item({title: ""})

            item.validateSync();

            const message = item.errors.title.message

            assert.equal(message, "Path `title` is required.");
        });
    });

    describe("description", () => {
        it("is a String", () => {
            const descriptionAsNonString = 1;

            const item = new Item({
                description: descriptionAsNonString
            });

            assert.strictEqual(item.description, descriptionAsNonString.toString());
        });

        it("is required", () => {
            const item = new Item({description: ""})

            item.validateSync();

            const message = item.errors.description.message

            assert.equal(message, "Path `description` is required.");
        });
    });

    describe("imageUrl", () => {
        it("is a String", () => {
            const imageUrlAsNonString = 1;

            const item = new Item({
                imageUrl: imageUrlAsNonString
            });

            assert.strictEqual(item.imageUrl, imageUrlAsNonString.toString());
        });

        it("is required", () => {
            const item = new Item({imageUrl: ""})

            item.validateSync();

            const message = item.errors.imageUrl.message

            assert.equal(message, "Path `imageUrl` is required.");
        });
    });
});
