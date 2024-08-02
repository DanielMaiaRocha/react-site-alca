    import User from '../models/Users.js/index.js'
    import bcrypt from 'bcrypt'
    import jwt from 'jsonwebtoken'
    import createError from '../utils/createError.js'

    export const register =  async (req, res, next) => {
        
        try {
            const hash = bcrypt.hashSync(req.body.password, 5)
            const newUser = new User({
                ...req.body, 
                password: hash,
            })

            await newUser.save()
            res.status(201).send('user has been created')
        }catch(err){
            next(err)
        }
    }

    export const login = async (req, res, next) => {
        try{
            const user = await User.findOne({ email: req.body.email })
            
            if (!user) return 

            const isCorrect = bcrypt.compareSync(req.body.password, user.password)   
            if (!isCorrect) return 
                
        const token = jwt.sign({
            id:user._id,
            isSeller:user.isSeller
            }, process.env.JWT_KEY
        )    
            
            const {password, ...info} = user._doc
            res.cookie("accessToken", token, {
                httpOnly: true, 
            }).status(200).send(info)
        }catch(err){
            next(createError(500,"Something went wrong"))
        }
    }

    export const logout = async (req, res) => {
        res.clearcookie("accessToken",{
            sameSite: "none",
            secure: true,
        }).status(200).send("User has been logged out.")
    }