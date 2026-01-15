import type { Request, Response, NextFunction } from "express";
import * as UserModel from "../models/user.model.js";

export async function createUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const {username,email} = req.body;

        const user = await UserModel.createUser(username,email);
        res.status(201).json(user);
    } catch (err) {
        next(err)
    }
}

export async function getUsers(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users)
    } catch (err) {
        next(err)
    }
}

export async function getUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const user_id  = Number(req.params.id);
        const user = await UserModel.getUser(user_id)
        res.json(user)
    } catch (err) {
        next(err)
    }
}

export async function updateUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const user_id  = Number(req.params.id);
        const {username, email} = req.body;

        const updatedUser = await UserModel.updateUser(user_id,username,email);

        res.json(updatedUser);
    } catch (err) {
        next(err)
    }
}