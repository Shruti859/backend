// const { model } = require("mongoose");
const mongoose = require("mongoose");

const {HoldingsSchema} =require("../schemas/HolidingsSchema")
const HoldingsModel = mongoose.model("holding", HoldingsSchema); // ✅ Correct Model Creation


// const HoldingsModel = new model("holding", HoldingsSchema);
module.exports = { HoldingsModel };

