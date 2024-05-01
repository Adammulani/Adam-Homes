import express from 'express'
import { bookVisit, cancleBooking, createUser, getAllBookings, getAllFavourites, toFav } from '../controllers/userController.js';

const router=express.Router()

router.post("/register",createUser);
router.post("/bookVisit/:id",bookVisit);
router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",cancleBooking);
router.post("/toFav/:rid",toFav);
router.post("/allFav",getAllFavourites);
export {router as userRoute};