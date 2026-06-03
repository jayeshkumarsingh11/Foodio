import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// App Config
const app = express()
const port = process.env.PORT || 4000

// Middlewares
app.use(express.json())

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
  'http://localhost:5173',
  'http://localhost:5174'
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins
}))

// DB Connection
connectDB();


// API Endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


// DB Config: mongodb+srv://jayeshkumarsingh11_Foodio_db:Foodio#1304@cluster0.bd4z4nv.mongodb.net/?