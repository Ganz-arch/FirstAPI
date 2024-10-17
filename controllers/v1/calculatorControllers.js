const results = []; //simulated database

// @desc POST create a new addition
// @route POST /v1/caculate/add
// @access Public

const createAdditionHandler = async (req, res) => {
  try {
    let { a, b, add } = req.body;
    let lowercaseAdd = add.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    }
    if (typeof lowercaseAdd !== "string") {
      res.status(400).json({ message: "Third input(add) must be a string" });
      return;
    } else if (lowercaseAdd !== "add") {
      res.status(400).json({ message: "Third input must be add" });
      return;
    }
    lowercaseAdd = a + b;

    const addition = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      add: lowercaseAdd,
    };

    results.push(addition);
    res.status(201).json({ message: "Added successfully", addition });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc POST create a new subtraction
// @route POST /v1/caculate/subtract
// @access Public

const createSubtractionHandler = async (req, res) => {
  try {
    let { a, b, subtract } = req.body;
    let lowercaseSubtract = subtract.toLowerCase();

    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    }
    if (typeof lowercaseSubtract !== "string") {
      res
        .status(400)
        .json({ message: "Third input(subtract) must be a string" });
      return;
    } else if (lowercaseSubtract !== "subtract") {
      res.status(400).json({ message: "Third input must be subtract" });
      return;
    }
    lowercaseSubtract = a - b;
    const subtraction = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      subtract: lowercaseSubtract,
    };

    results.push(subtraction);
    res.status(201).json({ message: "Subtracted successfully", subtraction });
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

// @desc POST create a new multiplication
// @route POST /v1/caculate/multiply
// @access Public

const createMultiplicationHandler = async (req, res) => {
  try {
    let { a, b, multiply } = req.body;
    let lowerCaseMultiply = multiply.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    }
    if (typeof lowerCaseMultiply !== "string") {
      res
        .status(400)
        .json({ message: "Third input(multiply) must be a string" });
      return;
    } else if (lowerCaseMultiply !== "multiply") {
      res.status(400).json({ message: "Third input must be multiply" });
      return;
    }
    lowerCaseMultiply = a * b;
    const multiplication = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      multiply: lowerCaseMultiply,
    };

    results.push(multiplication);
    res
      .status(201)
      .json({ message: "Multiplied successfully", multiplication });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc POST create a new division
// @route POST /v1/caculate/divide
// @access Public

const createDivisionHandler = async (req, res) => {
  try {
    let { a, b, divide } = req.body;
    let lowerCaseDivide = divide.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    } else if (b === 0) {
      res.status(400).json({ message: "MATH ERROR! Cannot divide by zero" });
      return;
    }
    if (typeof lowerCaseDivide !== "string") {
      res.status(400).json({ message: "Third input(divide) must be a string" });
      return;
    } else if (lowerCaseDivide !== "divide") {
      res.status(400).json({ message: "Third input must be divide" });
      return;
    }
    lowerCaseDivide = a / b;
    const division = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      divide: lowerCaseDivide,
    };

    results.push(division);
    res.status(201).json({ message: "Divided successfully", division });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc GET retrieves all calculation
// @route GET /v1/caculate
// @access Public

const getCalculationsHandler = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Calculations retrieved successfully", results });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc GET retrieves a calculation by id
// @route GET /v1/caculate/:id
// @access Public

const getCalculationHandler = async (req, res) => {
  try {
    const id = req.params.id;
    if (!results[id]) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    const result = results[id];
    res
      .status(200)
      .json({ message: "Calculation retrieved successfully", result });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc UPDATE updates an addition by id
// @route UPDATE /v1/caculate/add/:id
// @access Public

const updateAdditionHandler = async (req, res) => {
  try {
    const id = req.params.id;
    if (!results[id]) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    let { a, b, add } = req.body;
    let lowercaseAdd = add.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    }
    if (typeof lowercaseAdd !== "string") {
      res.status(400).json({ message: "Third input(add) must be a string" });
      return;
    } else if (lowercaseAdd !== "add") {
      res.status(400).json({ message: "Third input must be add" });
      return;
    }
    lowercaseAdd = a + b;

    const addition = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      add: lowercaseAdd,
    };

    results[id] = addition;
    res.status(201).json({ message: "Updated successfully", addition });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc UPDATE updates a subtraction by id
// @route UPDATE /v1/caculate/subtract/:id
// @access Public

const updateSubtractionHandler = async (req, res) => {
  try {
    const id = req.params.id;
    if (!results[id]) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    let { a, b, subtract } = req.body;
    let lowercaseSubtract = subtract.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    }
    if (typeof lowercaseSubtract !== "string") {
      res
        .status(400)
        .json({ message: "Third input(subtract) must be a string" });
      return;
    } else if (lowercaseSubtract !== "subtract") {
      res.status(400).json({ message: "Third input must be subtract" });
      return;
    }
    lowercaseSubtract = a - b;

    const subtraction = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      subtract: lowercaseSubtract,
    };

    results[id] = subtraction;
    res.status(201).json({ message: "Updated successfully", subtraction });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc UPDATE updates a multiplication by id
// @route UPDATE /v1/caculate/multiply/:id
// @access Public

const updateMultiplicationHandler = async (req, res) => {
  try {
    const id = req.params.id;
    if (!results[id]) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    let { a, b, multiply } = req.body;
    let lowerCaseMultiply = multiply.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof b !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    }
    if (typeof lowerCaseMultiply !== "string") {
      res
        .status(400)
        .json({ message: "Third input(multiply) must be a string" });
      return;
    } else if (lowerCaseMultiply !== "multiply") {
      res.status(400).json({ message: "Third input must be multiply" });
      return;
    }
    lowerCaseMultiply = a * b;

    const multiplication = {
      id: results.length,
      firstInput: a,
      secondInput: b,
      multiply: lowerCaseMultiply,
    };

    results[id] = multiplication;
    res.status(201).json({ message: "Updated successfully", multiplication });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

// @desc UPDATE updates a division by id
// @route UPDATE /v1/caculate/divide/:id
// @access Public

const updateDivisionHandler = async (req, res) => {
  try {
    const id = req.params.id;
    if (!results[id]) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    let { a, c, divide } = req.body;
    let lowerCaseDivide = divide.toLowerCase();
    if (typeof a !== "number") {
      res.status(400).json({ message: "First input(a) must be a number" });
      return;
    }
    if (typeof c !== "number") {
      res.status(400).json({ message: "Second input(b) must be a number" });
      return;
    } else if (c === 0) {
      res.status(400).json({ message: "MATH ERROR! Cannot divide by zero" });
      return;
    }
    if (typeof lowerCaseDivide !== "string") {
      res.status(400).json({ message: "Third input(divide) must be a string" });
      return;
    } else if (lowerCaseDivide !== "divide") {
      res.status(400).json({ message: "Third input must be divide" });
      return;
    }
    lowerCaseDivide = a / c;

    const division = {
      id: results.length,
      firstInput: a,
      secondInput: c,
      divide: lowerCaseDivide,
    };

    results[id] = division;
    res.status(201).json({ message: "Updated successfully", division });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};
// @desc DELETE deletes a calculation by id
// @route DELETE /v1/caculate/:id
// @access Public
const deleteCalculationHandler = async (req, res) => {
  try {
    const id = req.params.id;
    if (!results[id]) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    results.splice(id, 1);
    res
      .status(200)
      .json({ message: `Opeartion with id:${id} deleted successfully.` });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};
module.exports = {
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
};
