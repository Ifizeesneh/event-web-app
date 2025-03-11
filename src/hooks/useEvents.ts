import { fetchEvents, fetchEventById } from "../api/eventsApi";
import { EventsResponse, Event } from "../types/eventTypes";
import { useQuery } from "@tanstack/react-query";

export const useEvents = (
  page: number,
  limit: number,
  search: string,
  petsAllowed: boolean
) => {
  return useQuery<EventsResponse>({
    queryKey: ["events", page, limit, search, petsAllowed],
    queryFn: () => fetchEvents(page, limit, search, petsAllowed),
  });
};

export const useEventById = (id: string) => {
  return useQuery<Event>({
    queryKey: ["event", id],
    queryFn: async () => {
      const event = await fetchEventById(id);
      return event as unknown as Event;
    },
  });
};
