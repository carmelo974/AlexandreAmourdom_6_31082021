const mongoose = require("mongoose");

// désinfecte les chaines de manieres à etre utilisées en tte sécurité 
const sanitizePlugin = require("express-mongo-sanitize");

// création du shema mongoose pour que les données dans la base MongoDB soit conforme au schéma "sauceSchema"
const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, defaultValue: 0 },
  dislikes: { type: Number, defaultValue: 0 },
  usersLiked: { type: [String], required: true },
  usersDisliked: { type: [String], required: true },
});

sauceSchema.plugin(sanitizePlugin)

// exportation du schéma de données pour intéragir avec l'application
module.exports = mongoose.model("Sauce", sauceSchema);
