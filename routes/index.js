const router = require("express").Router();

const Item = require("../models/item");

router.get("/", async (req, res, next) => {
    const items = await Item.find({});
    res.render("index", {items});
});

router.get("/items/create", async (req, res, next) => {
    res.render("create");
});

router.post("/items/create", async (req, res, next) => {
    const { title, description, imageUrl } = req.body;

    const newItem = new Item({
        title,
        description,
        imageUrl
    });

    newItem.validateSync();

    if (newItem.errors) {
        res.status(400).render("create", {newItem});
    } else {
        await newItem.save();
        res.redirect("/");
    }
});

router.get("/items/:id", async (req, res, next) => {
    const item = await Item.findById({_id: req.params.id});

    res.render("item", {item});
});

router.get("/items/:id/delete", async (req, res, next) => {
    res.render("delete");
});

router.post("/items/:id/delete", async (req, res, next) => {
    Item.remove({ _id: req.params.id }, (error) => {
        if (error) return res.send(error);
        res.redirect("/");
    });
});

router.get("/items/:id/update", async (req, res, next) => {
    const item = await Item.findById({_id: req.params.id});

    res.render("update", {item});
});

router.post("/items/:id/update", async (req, res, next) => {
    const item = await Item.findById({_id: req.params.id});
    const { title, description, imageUrl } = req.body;

    const updatedItem = new Item({
        title,
        description,
        imageUrl
    });

    updatedItem.validateSync();

    if (updatedItem.errors) {
        if (updatedItem.errors.title) {
            item.title = ""
        }
        if (updatedItem.errors.description) {
            item.description = ""
        }
        if (updatedItem.errors.imageUrl) {
            item.imageUrl = ""
        }
        res.status(400).render("update", { updatedItem, item });
    } else {
        await Item.findOneAndUpdate({_id: req.params.id}, req.body, (error) => {
            if (error) return res.send(error);
            res.redirect("/");
        });
    }
});

module.exports = router;
