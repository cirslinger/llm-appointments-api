import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointmentService';
import { AppointmentRequest } from '../types';

const appointmentService = new AppointmentService();

export const getAppointments = (req: Request, res: Response): void => {
  const { userId } = req.body as AppointmentRequest;

  if (!userId || typeof userId !== 'string') {
    res.status(400).json({
      error: 'Bad Request',
      message: 'userId must be a valid string'
    });
    return;
  }

  const appointmentResponse = appointmentService.getAppointmentsByUserId(userId);

  if (!appointmentResponse) {
    res.status(404).json({
      error: 'Not Found',
      message: 'No user found with the provided userId'
    });
    return;
  }

  res.status(200).json(appointmentResponse);
};
