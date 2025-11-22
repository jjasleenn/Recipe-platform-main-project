import { Request, Response, NextFunction } from "express";
import { auth } from "../../../config/firebase";
import admin from "../../../config/firebase"; 

export interface AuthRequest extends Request {
  uid?: string;
  user?: admin.auth.DecodedIdToken;
}

export const firebaseAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const idToken = header.split("Bearer ")[1].trim();
    const decoded = await auth.verifyIdToken(idToken);
    req.uid = decoded.uid;
    req.user = decoded;
    return next();
  } catch (err: any) {
    return res.status(401).json({ message: "Invalid or expired token", error: err.message });
  }
};
