export interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  petsAllowed: boolean;
  date: string;
}

export type EventsResponse = Event[];
