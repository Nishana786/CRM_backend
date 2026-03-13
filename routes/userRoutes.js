const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const { createUser } = require("../controllers/userController");

router.post("/create", protect, authorize("admin"), createUser);

router.get("/profile", protect, (req,res)=>{

 res.json({
  message:"User profile accessed",
  user:req.user
 })

})

module.exports = router;