

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "orders were fetched"
    });
});

router.post("/", (req, res, next) => {
    const order = { 
        productId: req.body.productId,
        quantity: req.body.quantity
    }    
    res.status(201).json({
        message: "order was created",
        order: order
    });
});


router.get("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: "order details",
        message2: "roiejge irogjewriojg",
        id: id
    });
});

router.delete("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: "order deleted",
        message2: "roiejge irogjewriojg",
        id: id
    });
});

module.exports = router;