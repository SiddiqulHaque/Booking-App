const { createRoom, updateRoom, getoneRoom, getallRoom, deleteRoom } = require("../Controller/Roomcontroller");
const { verifyUser, verifyAdmin } = require("../Utils/VerifyToken");

const router=require("express").Router();
// Create
router.post("/:hotelid",verifyAdmin, createRoom);
// Update
router.put("/:id",verifyAdmin, updateRoom)
// Get One
router.get("/:id",getoneRoom)
// Get All
router.get("/",getallRoom)
// Delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
module.exports=router;