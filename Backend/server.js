import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRouter.js';
import connectDB from './src/config/db.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRouter.js';
import userRouter from './src/routes/userRouter.js';
import protectedRouter from './src/routes/protectedRouter.js';

import  jwt  from 'jsonwebtoken';

//app config

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();
//middleware

app.use(express.json());
app.use(cors());

//initializing routes
app.use('/api/users', userRouter);
app.use('/api/protected', protectedRouter);
app.use("/api/song",songRouter);
app.use('/api/album',albumRouter);

const users = [
  {
    name:"Mannan",
    age:22,
    hobbies:['reading','playing guitar','painting']
  }
]

app.post('/login', (req, res) => {
  res.json({ message: 'Logged in successfully' });
  const name = req.body.name;
  console.log(name);
  if (name === 'Mannan') {
    const token = jwt.sign({name},process.env.JWT_SECRET);
    res.send({token})
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
})

app.get('/',(req, res) => {
  res.send('API is working...');
})

app.listen(port,()=> console.log(`Server started on ${port}`))