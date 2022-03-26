const express=require('express');
const HelloController = require("../controllers/HelloController");

const UserController = require("../controllers/UserController");

const ProductController = require('../controllers/ProductController');
const ProfileController = require('../controllers/ProfileController');
const JWTWebToken = require("../controllers/JWTWebToken");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");
const router=  express.Router();



router.get("/hello-get",HelloController.Hello);
router.post("/insert-product",TokenVerifyMiddleware,ProductController.ProductInsert);
router.get("/select-product",TokenVerifyMiddleware,ProductController.SelectProduct);
router.get("/delete-product/:id",TokenVerifyMiddleware,ProductController.DeleteProduct);
router.post("/edit-product/:id",TokenVerifyMiddleware,ProductController.EditProduct);


// Practice JWT Encode Decode
router.get("/create-token",JWTWebToken.CreateToken);
router.get("/decode-token",JWTWebToken.DecodeToken);

// Create Profifle 
router.post("/create-profile",ProfileController.CreateProfile);

router.post("/create-user",UserController.CreateUser);
router.get("/users",UserController.ReadUser);
router.put("/user-edit/:id",UserController.UpdateUser);
router.delete("/user-remove/:id",UserController.RemoveUser)

module.exports=router;
