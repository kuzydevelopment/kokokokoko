const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
  guildID: { type: String, default: null },
  levelSystem: { type: Boolean, default: null },
  channel: { type: String, default: null}
})

module.exports = mongoose.model("guild", guildSchema);