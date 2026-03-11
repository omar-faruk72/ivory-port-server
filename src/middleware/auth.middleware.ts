// auth.middleware.ts
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }

        // টোকেন চেক করা
        const decoded = jwt.verify(token, config.jwt_secret as string);
        (req as any).user = decoded; 
        next();
    } catch (err) {
        res.status(401).json({ success: false, message: "Invalid Token" });
    }
};

export const isAdmin = (req: any, res: any, next: any) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Forbidden: You do not have admin permissions",
    });
  }
};