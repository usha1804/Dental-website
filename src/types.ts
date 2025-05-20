export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface Practitioner {
  id: number;
  name: string;
  designation: string;
  image: string;
  bio: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}