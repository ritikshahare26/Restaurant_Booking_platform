import { Router } from "express";
import { getFeaturedRestaurants, getRestaurantavailability, getRestaurantByslug, getRestaurants } from "../controllers/Restaurantcontroller.js";
const restaurantRouter = Router();
restaurantRouter.get('/', getRestaurants);
restaurantRouter.get('/featured', getFeaturedRestaurants);
restaurantRouter.get('/:slug', getRestaurantByslug);
//restaurantRouter.get('/slug',getRestaurantByslug);
restaurantRouter.get('/:id/availability', getRestaurantavailability);
export default restaurantRouter;
