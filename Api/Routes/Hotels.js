const { createHotel, updateHotel, getoneHotel, getallHotel, deleteHotel, countbyCity, countbyType } = require("../Controller/Hotelcontroller");
const Hotel = require("../Models/Hotels");
const { verifyAdmin } = require("../Utils/VerifyToken");

const router = require("express").Router();
// Create
// 
router.post("/",verifyAdmin ,createHotel);
// Update
router.put("/:id",verifyAdmin, updateHotel)
// Get One
router.get("/find/:id",getoneHotel)
// Get All
router.get("/",getallHotel)
// Delete
router.delete("/:id",verifyAdmin,deleteHotel)
//count by city
router.get ("/countbycity",countbyCity);
//count by type
router.get ("/countbytype",countbyType);

module.exports = router;
