const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createConfession,
  getUserConfessions,
  getConfessionsByCategory,
  deleteConfession
} = require("../controllers/confessionController");
const {body} = require("express-validator")
const validate = require('../middleware/validateMiddleware')

router.post("/", protect,
  [
    body("category").notEmpty().withMessage("Category is required"),
    body("mood").notEmpty().withMessage("Mood is required"),
    body("text").notEmpty().withMessage("Confession text is required")
    .isLength({max:2000}).withMessage("Confession made is too long (max 2000 chars)")
  ],
  validate, createConfession);
router.get("/history", protect, getUserConfessions);
router.get("/category/:category", protect, getConfessionsByCategory);
router.delete("/:id", protect, deleteConfession);

module.exports = router;
