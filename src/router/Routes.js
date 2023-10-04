const express = require("express");
const router = express.Router();

// Sample data (you would replace this with your actual data source)
let classData = [
  { id: 1, className: "Class 1" /* other properties */ },
  { id: 2, className: "Class 2" /* other properties */ },
  // ... add more data
];

// Define a DELETE route for deleting a class by ID
router.delete("/delete/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id);

  // Find and remove the element with the specified ID
  const index = classData.findIndex((item) => item.id === idToDelete);

  if (index !== -1) {
    // Element found, remove it
    classData.splice(index, 1);
    res.status(200).json({ message: "Element deleted successfully" });
  } else {
    // Element not found, send a 404 response
    console.log("Routes 404 entered");
    res.status(404).json({ message: "Element not found" });
  }
});

module.exports = router;
