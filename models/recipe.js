const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title: {type: String, required: true},
  ingredients: {type: String, reuired: true},
  instructions: {type: String, reuired: true},
  difficulty: {type: Number, reuired: true},
  time: {type: Number, reuired: true}
})

module.exports = mongoose.model('Recipe', recipeSchema);