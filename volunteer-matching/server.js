const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const eventsRouter = require('./routes/events'); // Add this line

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/volunteer-matching', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/events', eventsRouter); // Add this line

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
