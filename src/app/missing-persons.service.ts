import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MissingPerson, CaseStatus, Gender } from './missing-person.model';

@Injectable({ providedIn: 'root' })
export class MissingPersonsService {
  private http = inject(HttpClient);

  // All people loaded from the "database"
  private allMissingPeople = signal<MissingPerson[]>([]);

  // State for filters
  public nameFilter = signal<string>('');
  public statusFilter = signal<CaseStatus | 'All'>('Active');

  // A computed signal that derives the filtered list
  public filteredMissingPeople = computed(() => {
    const name = this.nameFilter().toLowerCase();
    const status = this.statusFilter();

    return this.allMissingPeople().filter(person => {
      const nameMatch = person.name.toLowerCase().includes(name);
      const statusMatch = status === 'All' || person.status === status;
      return nameMatch && statusMatch;
    });
  });


  constructor() {
    this.loadMissingPeople();
  }

  getMissingPeople() {
    // This will now return the computed (and filtered) list
    return this.filteredMissingPeople;
  }

  loadMissingPeople() {
    // In a real app, you'd fetch this from a server.
    // I'm creating more realistic data for Botswana.
    const initialPeople: MissingPerson[] = [
      {
        id: '1',
        name: 'Tshepo Kgosi',
        age: 28,
        gender: 'Male',
        lastSeenLocation: 'Gaborone, Block 8',
        lastSeenDate: '2023-10-15T18:00:00Z',
        circumstances: 'Last seen leaving work at the Central Business District. He was wearing a blue shirt and black trousers.',
        status: 'Active',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contact: {
          name: 'Mpho Kgosi',
          phone: '+267 7123 4567',
        },
      },
      {
        id: '2',
        name: 'Lorato Modise',
        age: 19,
        gender: 'Female',
        lastSeenLocation: 'Francistown, Area W',
        lastSeenDate: '2023-09-28T12:30:00Z',
        circumstances: 'Disappeared after leaving her home to go to the local market. She was carrying a red backpack.',
        status: 'Active',
        photoUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contact: {
          name: 'Kabelo Modise',
          phone: '+267 7234 5678',
        },
      },
      {
        id: '3',
        name: 'Bontle Williams',
        age: 45,
        gender: 'Female',
        lastSeenLocation: 'Maun, near the Thamalakane River',
        lastSeenDate: '2023-08-01T10:00:00Z',
        circumstances: 'Went on a morning walk and did not return. She has a history of memory loss.',
        status: 'Located',
        photoUrl: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contact: {
          name: 'David Williams',
          phone: '+267 7345 6789',
        },
      },
    ];
    this.allMissingPeople.set(initialPeople);
  }

  addPerson(person: Omit<MissingPerson, 'id' | 'status'>) {
    const newPerson: MissingPerson = {
      id: new Date().getTime().toString(),
      status: 'Active', // New cases are always active
      ...person
    };
    this.allMissingPeople.update((people) => [newPerson, ...people]);
  }

  getPersonById(id: string) {
    // Find from the original, unfiltered list
    return this.allMissingPeople().find((p) => p.id === id);
  }

  updateStatus(id: string, status: CaseStatus) {
    this.allMissingPeople.update((people) =>
      people.map((p) => (p.id === id ? { ...p, status } : p))
    );
  }
}
