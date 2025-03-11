import { useQuery } from "react-query";
import { fetchEvents, fetchEventById } from "../api/eventsApi";
import { EventsResponse, Event } from "../types/eventTypes";

export const useEvents = (
  page: number,
  limit: number,
  search: string,
  petsAllowed: boolean
) => {
  return useQuery<EventsResponse>(
    ["events", page, limit, search, petsAllowed],
    () => fetchEvents(page, limit, search, petsAllowed)
  );
};

export const useEventById = (id: string) => {
  return useQuery<Event>(["event", id], async () => {
    const event = await fetchEventById(id);
    return event as unknown as Event;
  });
};
