import { Router } from 'express';
import { getAppointments } from '../controllers/appointmentController';

const router = Router();

router.post('/appointments', getAppointments);

export default router;
