import User from "../model/UserModel.js";
import argon2 from "argon2";

export const getUser = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes:['user_uuid','user_fullname','user_email','user_role','user_phone']
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const getUserById = async (req, res) => {
    try {
        const response = await User.findAll({
            attributes:['user_uuid','user_fullname','user_email','user_role','user_phone'],
            where: {
                user_uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


export const createUser = async (req, res) => {
    const {user_fullname, user_email, user_password, user_confirmPassword, user_role, user_phone} = req.body;
    if (user_password !== user_confirmPassword) return res.status(400).json({msg: "Password and confirm password not match"})
    const hashPassword = await argon2.hash(user_password);
    try {
        await User.create({
            user_fullname: user_fullname,
            user_email: user_email,
            user_password: hashPassword,
            user_role: user_role,
            user_phone: user_phone,
        });
        res.status(201).json({msg:"Registration successful"})
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}


export const updateUser = async (req,res) =>{
    const user = await User.findOne({
        where: {
            user_uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: 'User not found'});
    const {user_fullname, user_email, user_password, user_confirmPassword, user_role, user_phone} = req.body;
    let hashPassword;
    if(user_password === "" || user_password === null){
        hashPassword = user.user_password;  //if user didn't enter password system will get the password from db.
    }else{
        hashPassword = await argon2.hash(user_password);
    }
    if (user_password !== user_confirmPassword) return res.status(400).json({msg: "Password and confirm password not match"})
    try {
        await User.update({
            user_fullname: user_fullname,
            user_email: user_email,
            user_password: hashPassword,
            user_role: user_role,
            user_phone: user_phone,
        },{
            where:{
                user_uuid:req.params.id
            }
        });
        res.status(200).json({msg:"User updated successfully"})
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}


export const deleteUser =async (req,res) =>{
    const user = await User.findOne({
        where: {
            user_uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: 'User not found'});
    try {
        await User.destroy({
            where: {
                id: user.id
            }
        });
        res.status(200).json({msg:"User deleted successful"})
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}