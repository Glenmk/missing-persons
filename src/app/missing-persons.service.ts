import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MissingPerson } from './missing-person.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MissingPersonsService {
  private http = inject(HttpClient);
  private missingPeople = signal<MissingPerson[]>([]);

  getMissingPeople() {
    return this.missingPeople.asReadonly();
  }

  loadMissingPeople() {
    // In a real app, you'd fetch this from a server
    const initialPeople: MissingPerson[] = [
      {
        id: '1',
        name: 'John Doe',
        age: 30,
        lastSeenLocation: 'New York',
        photoUrl: 'https://via.placeholder.com/300',
      },
      {
        id: '2',
        name: 'Jane Smith',
        age: 25,
        lastSeenLocation: 'Los Angeles',
        photoUrl: 'https://via.placeholder.com/300',
      },
    ];
    this.missingPeople.set(initialPeople);
  }

  addPerson(person: Omit<MissingPerson, 'id'>) {
    const newPerson: MissingPerson = {
      ...person,
      id: new Date().getTime().toString(),
    };
    this.missingPeople.update((people) => [...people, newPerson]);
  }

  getPersonById(id: string) {
    return this.missingPeople().find((p) => p.id === id);
  }

  markAsFound(id: string) {
    this.missingPeople.update((people) => people.filter((p) => p.id !== id));
  }
}
