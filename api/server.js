import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from  './routes/user.route.js'
import usersecondRoute from  './routes/usersecond.route.js'
import cardRoute from './routes/card.route.js'
import chatRoute from './routes/chat.route.js'
import comentsRoute from './routes/coments.route.js'
import messagesRoute from './routes/messages.route.js'
import conversationRoute from './routes/conversation.route.js'
import appointRoute from './routes/appoint.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';



dotenv.config();

const app = express();
const port = process.env.PORT || 8800;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/userseconds', usersecondRoute)
app.use('/api/cards', cardRoute)
app.use('/api/chats', chatRoute)
app.use('/api/coments', comentsRoute)
app.use('/api/messages', messagesRoute)
app.use('/api/conversations', conversationRoute)
app.use('/api/appoints', appointRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
   
    return res.status(errorStatus).send(errorMessage)
})

connectDB();


app.listen(port, () => {
    console.log(`Back-End Running on port ${port}`);
});