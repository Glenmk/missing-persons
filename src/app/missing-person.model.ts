export type CaseStatus = 'Active' | 'Located';
export type Gender = 'Male' | 'Female' | 'Other';

export interface MissingPerson {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  lastSeenLocation: string;
  lastSeenDate: string;
  circumstances: string;
  status: CaseStatus;
  photoUrl: string;
  contact: {
    name: string;
    phone: string;
  };
}
