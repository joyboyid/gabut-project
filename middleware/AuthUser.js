import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({msg: "Use ur password dude!"});
    }
    const user = await User.findOne({
        attributes:['uuid', 'name', 'email', 'role'],
        where:{
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(400).json({msg: "user not found!"});
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const user = await User.findOne({
        attributes:['uuid', 'name', 'email', 'role'],
        where:{
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(400).json({msg: "user not found!"});
    if(user.role !== "admin") return res.status(403).json({msg: "Restricted Area"});
    next();
}