import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    req.shhhh_secret = "dodgy";
    next()
});

app.get('/', (req, res) => {
    console.log('Hello from express');
    res.status(200);
    res.json({
        message: 'hello'
    })
});

app.use('/api', protect, router);

app.post('/user', createNewUser);
app.post('/signin', signin);

//Error handling, add error logging here
//Catches errors through by app handlers
app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({
            message: 'Unauthorised'
        })
    } else if (err.type === 'input') {
        res.status(400).json({
            message: 'Invalid input'
        })
    } else {
        res.status(500).json({
            message: 'Oops'
        })
    }
})
//Asyncronous errors handled in respective handlers,
//you add next and send error through there in a try/catch block

export default app;