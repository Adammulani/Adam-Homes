import express from 'express'
import { bookVisit, cancleBooking, createUser, getAllBookings, toFav } from '../controllers/userController.js';

const router=express.Router()

router.post("/register",createUser);
router.post("/bookVisit/:id",bookVisit);
router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",cancleBooking);
router.post("/toFav/:rid",toFav);
export {router as userRoute};