import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user.js";

export interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as { id: string };

      // Get user from database (exclude password)
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        res.status(401).json({ message: "Not authorized, user not found" });
        return;
      }

      req.user = user;
      next();
      return;
    } catch (error) {
      console.error("Auth Middleware Error:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
      return;
    }
  }

  res.status(401).json({ message: "Not authorized, no token" });
};

export const adminOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Access denied. Admin role required." });
  }
};

export const ownerOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  if (
    req.user &&
    (req.user.role === "owner" || req.user.role === "admin")
  ) {
    next();
  } else {
    res
      .status(403)
      .json({ message: "Access denied. Restaurant owner role required." });
  }
};