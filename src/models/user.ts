export interface User {
  id: string;
  email: string;
  password: string;
  fname?: string;
  lname?: string;
  birthday?: string;
  gender?: string;
  height?: number;
  weight?: number;
  measurementSystem?: MeasurementSystem;
  isAdmin: Boolean;
  currentShoeId: number;
}

enum MeasurementSystem {
  metric = 'metric',
  imperial = 'imperial'
}
