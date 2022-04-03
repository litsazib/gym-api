const express=require('express');
const TestController = require("../controllers/TestController");
const MembershipController = require("../controllers/MembershipController");
const UserController = require("../controllers/UserController");
const TrainerController = require("../controllers/TrainerController");
const PlansController = require("../controllers/PlansController");
const PackagesController = require("../controllers/PackagesController");
const MembersController = require("../controllers/MembersController");
const RegController = require("../controllers/RegController");
const PaymentsController = require("../controllers/PaymentsController");
const ScheduleController = require("../controllers/ScheduleController");

const JWTWebToken = require("../controllers/JWTWebToken");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");
const router=  express.Router();


// Test api
router.get("/",TestController.Test);

//MembershipPlan Deltais 
router.get("/membership-info",MembershipController.membershipDetails);

// User module
router.post("/create-user",UserController.CreateUser);
router.get("/users",TokenVerifyMiddleware,UserController.ReadUser);
router.put("/user-edit/:id",TokenVerifyMiddleware,UserController.UpdateUser);
router.delete("/user-remove/:id",TokenVerifyMiddleware,UserController.RemoveUser);
router.post("/login",UserController.UserLogin);

// Trainers module 
router.post("/create-trainer",TokenVerifyMiddleware,TrainerController.CreateTrainer);
router.get("/trainers",TokenVerifyMiddleware,TrainerController.SelectTrainer);
router.put("/trainers-edit/:id",TokenVerifyMiddleware,TrainerController.trainerEdit);
router.delete("/trainers-remove/:id",TokenVerifyMiddleware,TrainerController.trainerRemove)

//Plans module
router.post("/create-plan",TokenVerifyMiddleware,PlansController.PlanCreate);
router.get("/plans",TokenVerifyMiddleware,PlansController.PlanSelect);
router.put("/plan-edit/:id",TokenVerifyMiddleware,PlansController.planEdit);
router.delete("/plan-remove/:id",TokenVerifyMiddleware,PlansController.planRemove);

//Packages module
router.post("/create-Package",TokenVerifyMiddleware,PackagesController.PackageCreate);
router.get("/packages",TokenVerifyMiddleware,PackagesController.PackageSelect);
router.put("/package-edit/:id",TokenVerifyMiddleware,PackagesController.PackageEdit);
router.delete("/package-remove/:id",TokenVerifyMiddleware,PackagesController.PackageRemove);

//Members module
router.post("/create-member",TokenVerifyMiddleware,MembersController.memberCreate);
router.get("/members",TokenVerifyMiddleware,MembersController.membersSelect);
router.put("/member-edit/:id",TokenVerifyMiddleware,MembersController.memberEdit);
router.delete("/member-remove/:id",TokenVerifyMiddleware,MembersController.memberRemove);

//Members module
router.post("/registration",TokenVerifyMiddleware,RegController.regCreate);
router.get("/registration-list",TokenVerifyMiddleware,RegController.regSelect);
router.put("/registration-edit/:id",TokenVerifyMiddleware,RegController.regEdit);
router.delete("/registration-remove/:id",TokenVerifyMiddleware,RegController.regRemove);

//payments module
router.post("/payments",TokenVerifyMiddleware,PaymentsController.PaymentCreate);
router.get("/payments-list",TokenVerifyMiddleware,PaymentsController.PaymentSelect);
router.put("/payments-edit/:id",TokenVerifyMiddleware,PaymentsController.PaymentEdit);
router.delete("/payments-remove/:id",TokenVerifyMiddleware,PaymentsController.PaymentRemove);

//schedules module
router.post("/create-schedule",TokenVerifyMiddleware,ScheduleController.scheduleCreate);
router.get("/schedules",TokenVerifyMiddleware,ScheduleController.scheduleSelect);
router.put("/schedule-edit/:id",TokenVerifyMiddleware,ScheduleController.scheduleEdit);
router.delete("/schedule-remove/:id",TokenVerifyMiddleware,ScheduleController.scheduleRemove);


module.exports=router;
