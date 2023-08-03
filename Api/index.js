
const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const cors=require("cors")
const app=express();
const cookieParser=require("cookie-parser");
const AuthRoutes=require("./Routes/Auth")
const UsersRoutes=require("./Routes/Users")
const HotelsRoutes=require("./Routes/Hotels")
const RoomsRoutes=require("./Routes/Rooms")
dotenv.config();
app.use(cors());
app.use(express.json());
const connect=async ()=>{
    try {
        mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("Connected to DB")
    } catch (error) {
        throw error
    }
}
mongoose.connection.on("diconnected",()=>{
    console.log("Db Disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("Db connected");
})
// Middlewares 
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",AuthRoutes);
app.use("/api/users",UsersRoutes);
app.use("/api/hotels",HotelsRoutes);
app.use("/api/rooms",RoomsRoutes);

// error Middleware 
app.use((err,req,res,next)=>{
    const errStatus=err.status||500;
    const errmsg=err.message||"Something went wrong"
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errmsg,
        stack:err.stack
    });
})

app.listen(8000,(req,res)=>{
    connect();
    console.log("Server is listening on port 8000");
})