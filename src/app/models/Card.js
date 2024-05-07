const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const CardSchema = new Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: true,
});

const CardModel = model('Card', CardSchema);

module.exports = CardModel;