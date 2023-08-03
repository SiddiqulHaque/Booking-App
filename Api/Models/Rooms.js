const mongoose=require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}], 
    // if there is many rooms of same type so we store room numbers of same type and there availabality and unavailability
  },
  { timestamps: true }
);

module.exports= mongoose.model("Room", RoomSchema);