const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://paulinecpasseri:KK0BRNyNabdQvTnv@cluster0.z4fy2vy.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
