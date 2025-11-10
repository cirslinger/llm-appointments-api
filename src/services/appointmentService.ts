import { AppointmentResponse, Appointment } from '../types';

const MOCK_APPOINTMENTS: Record<string, AppointmentResponse> = {
  '10001': {
    userId: '10001',
    userName: 'John Doe',
    appointments: [
      {
        appointmentId: 'APT-10001-001',
        date: '2025-11-15',
        time: '10:00 AM',
        provider: 'Dr. Sarah Johnson',
        specialty: 'Primary Care',
        location: 'Springfield Medical Center - Building A, Room 205',
        appointmentType: 'Annual Physical',
        status: 'Confirmed',
        reason: 'Annual checkup and preventive care'
      },
      {
        appointmentId: 'APT-10001-002',
        date: '2025-11-28',
        time: '2:30 PM',
        provider: 'Dr. Michael Roberts',
        specialty: 'Cardiology',
        location: 'Springfield Heart Institute - Suite 320',
        appointmentType: 'Follow-up',
        status: 'Confirmed',
        reason: 'Blood pressure monitoring'
      },
      {
        appointmentId: 'APT-10001-003',
        date: '2025-12-10',
        time: '9:15 AM',
        provider: 'Dr. Emily Chen',
        specialty: 'Ophthalmology',
        location: 'Vision Care Center - 2nd Floor',
        appointmentType: 'Eye Exam',
        status: 'Pending Confirmation',
        reason: 'Annual eye examination'
      }
    ]
  },
  '10002': {
    userId: '10002',
    userName: 'Jane Smith',
    appointments: [
      {
        appointmentId: 'APT-10002-001',
        date: '2025-11-12',
        time: '11:30 AM',
        provider: 'Dr. Michael Chen',
        specialty: 'Primary Care',
        location: 'Portland Health Clinic - Room 102',
        appointmentType: 'Consultation',
        status: 'Confirmed',
        reason: 'Seasonal allergies consultation'
      },
      {
        appointmentId: 'APT-10002-002',
        date: '2025-12-05',
        time: '3:00 PM',
        provider: 'Dr. Lisa Martinez',
        specialty: 'Dermatology',
        location: 'Portland Skin Care Center - Suite 201',
        appointmentType: 'Skin Check',
        status: 'Confirmed',
        reason: 'Annual skin cancer screening'
      }
    ]
  },
  '10003': {
    userId: '10003',
    userName: 'Bob Wilson',
    appointments: [
      {
        appointmentId: 'APT-10003-001',
        date: '2025-11-20',
        time: '8:45 AM',
        provider: 'Dr. Emily Rodriguez',
        specialty: 'Primary Care',
        location: 'Austin Medical Plaza - 3rd Floor',
        appointmentType: 'Wellness Visit',
        status: 'Confirmed',
        reason: 'Routine wellness checkup'
      },
      {
        appointmentId: 'APT-10003-002',
        date: '2025-11-22',
        time: '1:00 PM',
        provider: 'Dr. James Patterson',
        specialty: 'Orthopedics',
        location: 'Austin Orthopedic Center - Building B',
        appointmentType: 'Follow-up',
        status: 'Confirmed',
        reason: 'Knee pain follow-up'
      },
      {
        appointmentId: 'APT-10003-003',
        date: '2025-12-15',
        time: '10:30 AM',
        provider: 'Dr. Sarah Thompson',
        specialty: 'Physical Therapy',
        location: 'Austin Rehabilitation Center',
        appointmentType: 'Therapy Session',
        status: 'Scheduled',
        reason: 'Knee rehabilitation - Session 4 of 8'
      }
    ]
  },
  '10004': {
    userId: '10004',
    userName: 'Alice Brown',
    appointments: [
      {
        appointmentId: 'APT-10004-001',
        date: '2025-11-18',
        time: '4:00 PM',
        provider: 'Dr. David Kim',
        specialty: 'Primary Care',
        location: 'Seattle Health Center - Main Building',
        appointmentType: 'Reactivation Consultation',
        status: 'Confirmed',
        reason: 'Membership reactivation and health assessment'
      }
    ]
  },
  '10005': {
    userId: '10005',
    userName: 'Charlie Davis',
    appointments: [
      {
        appointmentId: 'APT-10005-001',
        date: '2025-11-14',
        time: '9:00 AM',
        provider: 'Dr. Lisa Thompson',
        specialty: 'Primary Care',
        location: 'Denver Family Medicine - Suite 105',
        appointmentType: 'Sick Visit',
        status: 'Confirmed',
        reason: 'Cold and flu symptoms'
      },
      {
        appointmentId: 'APT-10005-002',
        date: '2025-12-01',
        time: '2:00 PM',
        provider: 'Dr. Robert Chang',
        specialty: 'Gastroenterology',
        location: 'Denver Digestive Health - 4th Floor',
        appointmentType: 'Consultation',
        status: 'Scheduled',
        reason: 'Digestive health consultation'
      },
      {
        appointmentId: 'APT-10005-003',
        date: '2025-12-20',
        time: '11:00 AM',
        provider: 'Dr. Lisa Thompson',
        specialty: 'Primary Care',
        location: 'Denver Family Medicine - Suite 105',
        appointmentType: 'Follow-up',
        status: 'Scheduled',
        reason: 'Follow-up for gastro consultation results'
      }
    ]
  }
};

export class AppointmentService {
  getAppointmentsByUserId(userId: string): AppointmentResponse | null {
    return MOCK_APPOINTMENTS[userId] || null;
  }
}
