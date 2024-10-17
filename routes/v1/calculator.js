// Import express 
const express = require("express");

const router = express.Router();

// Import handler funct
const {
  createAdditionHandler,
  createSubtractionHandler,
  createMultiplicationHandler,
  createDivisionHandler,
  getCalculationsHandler,
  getCalculationHandler,
  updateAdditionHandler,
  updateSubtractionHandler,
  updateMultiplicationHandler,
  updateDivisionHandler,
  deleteCalculationHandler,
} = require("../../controllers/v1/calculatorControllers");

router.post("/add", createAdditionHandler); //Creates an addition of two input parameters
router.post("/subtract", createSubtractionHandler); //Creates a subtraction of two input parameters
router.post("/multiply", createMultiplicationHandler); //Creates a mulptiplication of two input parameters
router.post("/divide", createDivisionHandler); //Creates a division of two input parameters
router.get("/", getCalculationsHandler); //Retrieves all calculations
router.get("/:id", getCalculationHandler); //Retrieves a calculation by id
router.put("/add/:id", updateAdditionHandler); //Updates an addition operation by id
router.put("/subtract/:id", updateSubtractionHandler); //Updates a subtraction operation by id
router.put("/multiply/:id", updateMultiplicationHandler); //Updates a multiplication operation by id
router.put("/divide/:id", updateDivisionHandler); //Updates an division operation by id
router.delete("/:id", deleteCalculationHandler); //Deletes an operation by id
module.exports = router;
