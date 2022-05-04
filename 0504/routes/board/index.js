const express = require("express");
const router = express.Router();
const boardController = require("./board.controller.js")

router.get("/list", boardController.list);
router.get("/view", boardController.view);
router.get("/write", boardController.write);
router.get("/update", boardController.update);


router.post("/write", boardController.writeAction);
router.post("/update", boardController.updateAction);
router.post("/delete", boardController.deleteAction); //원래는 post지만 get으로 할 수 있다

module.exports = router;