#!/usr/bin/env node
const { mongoose, databaseUrl, options } = require("../database");
const Item = require("../models/item");

const seed = async () => {
    await mongoose.connect(databaseUrl, options);
    const item1 = {
        title: "Livro de Protractor",
        description: "Lições sobre testes end-to-end automatizados",
        imageUrl: "http://walmyr-filho.com/static/media/bookImg.a1b0a429.png",
    };
    const item2 = {
        title: "TAT",
        description: "Só uma descrição qualquer",
        imageUrl: "http://walmyr-filho.com/static/media/tatBackground.7369418f.jpg"
    };
    const item3 = {
        title: "Introdução aos testes automatizados",
        description: "Primeiro curso da Escola Talking About Testing",
        imageUrl: "https://prd-coursifyme.s3.amazonaws.com/uploads/course/course_image/2496/background_skateboard-TAT-01.jpg"
    };
    const item4 = {
        title: "O problema dos sleeps",
        description: "Por que não se deve utilizar sleeps em testes automatizados",
        imageUrl: "https://talkingabouttesting.files.wordpress.com/2017/11/homer-simpson-sleeping.png"
    };
    const item5 = {
        title: "Matrix",
        description: "O melhor filme de todos os tempos",
        imageUrl: "https://talkingabouttesting.files.wordpress.com/2017/02/matrix_fix.jpg"
    };
    const item6 = {
        title: "Flaky tests",
        description: "A importância de lidar com testes flaky",
        imageUrl: "https://talkingabouttesting.files.wordpress.com/2017/01/testes-flacky-sopro.png"
    };

    await Item.create(item1);
    await Item.create(item2);
    await Item.create(item3);
    await Item.create(item4);
    await Item.create(item5);
    await Item.create(item6);
};

seed()
    .then(() => {
        console.log("Seeded database sucessfully");
        process.exit(0);
    })
    .catch(err => {
        console.log("Database seed unsuccessful");
        throw err;
        process.exit(1);
    });
