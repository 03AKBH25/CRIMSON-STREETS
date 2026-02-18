const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createConfession,
  getUserConfessions,
  getConfessionsByCategory
} = require("../controllers/confessionController");

router.post("/", protect, createConfession);
router.get("/history", protect, getUserConfessions);
router.get("/category/:category", protect, getConfessionsByCategory);

module.exports = router;
