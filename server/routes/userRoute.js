import express from 'express'
import { bookVisit, cancleBooking, createUser, getAllBookings } from '../controllers/userController.js';

const router=express.Router()

router.post("/register",createUser);
router.post("/bookVisit/:id",bookVisit);
router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",cancleBooking)
export {router as userRoute};