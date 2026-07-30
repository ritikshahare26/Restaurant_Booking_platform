
import{Router} from "express";
import { protect } from "../middlewares/auth.js";
import { cancelBooking, createBooking, getMyBooking } from "../controllers/bookingController.js";

const bookingrouter = Router();


bookingrouter.post("/",protect, createBooking)
bookingrouter.get("/my",protect, getMyBooking)
bookingrouter.put("/:id/cancel",protect, cancelBooking)

export default bookingrouter;