import jwt from "jsonwebtoken"
import User from "../models/Users.js/index.js";
import createError from "../utils/createError.js";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return next(createError(401,"You are not authenticated"))
    
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return next(createError(403,"Token is not valid")) 

        const user = await User.findById(req.params.id);
        if (!user) return next(createError(404,"User not found!")) 

        if (payload.id !== user._id.toString())
            return next(createError(403,"You can delete only your account")) 

        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).send("User has been deleted");
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    });
}