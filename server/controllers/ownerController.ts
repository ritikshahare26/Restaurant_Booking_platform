import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";


//Get owner's restaurant 
//GET/api/owner/restaurant
export const getOwnerRestaurant =async (req:AuthRequest, res: Response):Promise<void>=> {
    try {
        const restaurant = await Restaurant
        
    } catch (error:any) {
        console.error(error);
        res.status(400).json({message:error.message});
     
    }
}

// create owner's restaurant (submitted to pending)
//POST/api/owner/restaurant
export const createOwnerRestaurant =async (req:AuthRequest, res: Response):Promise<void>=> {
    try {
        
    } catch (error:any) {
        console.error(error);
        res.status(400).json({message:error.message});
     
    }
}

// update  owner's restaurant
//PUT/api/owner/restaurant
export const updateOwnerRestaurant =async (req:AuthRequest, res: Response):Promise<void>=> {
    try {
        
    } catch (error:any) {
        console.error(error);
        res.status(400).json({message:error.message});
     
    }
}

// Update status of a booking 
//PUT/api/owner/bookings/:id/status
export const updaterBookingStatus =async (req:AuthRequest, res: Response):Promise<void>=> {
    try {
        
    } catch (error:any) {
        console.error(error);
        res.status(400).json({message:error.message});
     
    }
}