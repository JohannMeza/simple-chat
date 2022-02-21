const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
},{
  versionKey: false,
  timestamps: true
})

const Message = model('Message', messageSchema);

module.exports = Message