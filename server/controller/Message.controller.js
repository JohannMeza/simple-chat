const Message = require('../models/Message')

const index = async (req, res) => {
  const message = await Message.find()
  res.status(201).json(message)
}

const store = async (req, res) => {
  const { name, message } = req.body;
  if(!name || !message ) return res.status(403).json({ message: 'Data required incomplete' })

  const saveMessage = new Message({ name, message })
  await saveMessage.save()
  res.json({ message: 'Created User' })
}

const show = async (req, res) => {
  try {
    const id = req.params.id
    const message = await Message.findById(id);
    if (!message) return res.status(441).json({ message: 'This message not found in the database or id incorrect' })
    res.status(201).json(message)
  } catch (err) {
    return res.status(500).json({ message: `Error in server ${err}` })
  }
}

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, message } = req.body
    const messageUpdate = await Message.findOneAndUpdate(id, { name, message }, { new: true } )
    if (!message) return res.status().json({ message: "Message not found for update" })
    res.status(201).json(messageUpdate)
  } catch (err) {
    res.status(500).json({ message: `Error in server ${err}` })
  }
}

const deleted = async (req, res) => {
  try {
    const id = req.params.id;
    const message = await Message.findByIdAndDelete(id);
    if (!message) return res.status(404).json({ message: 'Message not found for delete or id incorrect' })
    res.json({ message: 'Message delete' })
  } catch (err) {
    res.status(500).json({ message: `Error in server ${err}` })
  }
}

module.exports = {
  index, 
  store,
  show,
  update,
  deleted
}