const { updateUser, getoneUser, getallUser, deleteUser } = require("../Controller/Usercontroller");
const { verifyUser, verifyAdmin } = require("../Utils/VerifyToken");


const router = require("express").Router();
// Update
router.put("/:id",verifyUser, updateUser)
// Get One
router.get("/:id",verifyUser, getoneUser)
// Get All
router.get("/",verifyAdmin, getallUser)
// Delete
router.delete("/:id",verifyUser,deleteUser)
module.exports = router;
