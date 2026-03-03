const Confession = require("../models/Confession");
const { encrypt, decrypt } = require("../utils/encrypt")

// Create confession
const createConfession = async (req, res) => {
  try {
    const { category, text, mood } = req.body;

    const confession = await Confession.create({
      user: req.user._id,
      category,
      mood,
      text:encrypt(text)
    });

    res.status(201).json(confession);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get logged-in user's confessions
const getUserConfessions = async (req, res) => {
  try {
    const confessions = await Confession.find({ user: req.user._id, isDeleted: false })
      .sort({ createdAt: -1 });

    const decryptedConfessions = confessions.map(conf=>({
      ...conf.toObject(),
      text:decrypt(conf.text)
    }))

    res.json(decryptedConfessions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get confessions by category
const getConfessionsByCategory = async (req, res) => {
  try {
    const confessions = await Confession.find({
      user: req.user._id,
      category: req.params.category,
      isDeleted: false
    }).sort({ createdAt: -1 });

    res.json(confessions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete confession
const deleteConfession = async (req, res) => {
  try {
    const confession = await Confession.findById(req.params.id);

    if (!confession) {
      return res.status(404).json({ message: "Confession not found" });
    }

    // Ensure user owns the confession
    if (confession.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    confession.isDeleted = true
    await confession.save()

    res.json({ message: "Confession deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createConfession,
  getUserConfessions,
  getConfessionsByCategory,
  deleteConfession
};
