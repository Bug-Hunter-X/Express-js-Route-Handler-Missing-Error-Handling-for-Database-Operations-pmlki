const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database operation to get user details ...
    const user = await getUserDetails(userId); // Assuming an async function
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).send('Error fetching user details');
  }
});

//Example async function to get user details
async function getUserDetails(userId){
    //Simulate database call
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{resolve({id:userId, name:"Test"})},100)
    });
} 