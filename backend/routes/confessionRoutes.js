const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createConfession,
  getUserConfessions,
  getConfessionsByCategory,
  deleteConfession
} = require("../controllers/confessionController");

router.post("/", protect, createConfession);
router.get("/history", protect, getUserConfessions);
router.get("/category/:category", protect, getConfessionsByCategory);
router.delete("/:id", protect, deleteConfession);

module.exports = router;
