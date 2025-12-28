
export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface AppointmentData {
  name: string;
  phone: string;
  department: string;
  date: string;
  time: string;
  message: string;
}
