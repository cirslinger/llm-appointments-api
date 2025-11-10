export interface AppointmentRequest {
  userId: string;
}

export interface Appointment {
  appointmentId: string;
  date: string;
  time: string;
  provider: string;
  specialty: string;
  location: string;
  appointmentType: string;
  status: string;
  reason: string;
}

export interface AppointmentResponse {
  userId: string;
  userName: string;
  appointments: Appointment[];
}

export interface ErrorResponse {
  error: string;
  message: string;
}
