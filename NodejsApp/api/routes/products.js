

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "it is ok, handling get request to /product"
    });
});

router.post("/", (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: "handling post request to /product",
        createdProduct: product
    });
});


router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    if (id === "special") {
        res.status(200).json({
            message: "you discovered special ID",
            message2: "roiejge irogjewriojg",
            id: id
        })
    }
    else {
        res.status(200).json({
            message: "you passed na ID",
            id: id
        });
    }
});

router.patch("/:productId", (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "updated product ",
        id: id
    });
});

router.delete("/:productId", (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: "deleted product ",
        id: id
    });
});

module.exports = router;