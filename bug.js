const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to get user details ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling
  }
  // ... more code to handle the user details
  res.send(user); // Missing error handling if getting user details fails
});