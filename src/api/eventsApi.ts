import axios from "axios";
import { EventsResponse } from "../types/eventTypes";

const API_BASE_URL =
  "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events";

export const fetchEvents = async (
  page: number,
  limit: number,
  search: string,
  petsAllowed: boolean
) => {
  const response = await axios.get<EventsResponse>(API_BASE_URL, {
    params: { page, limit, search, petsAllowed },
  });
  //   console.log(response.data, "response");
  return response.data;
};

export const fetchEventById = async (id: string) => {
  const response = await axios.get<Event>(`${API_BASE_URL}/${id}`);
  return response.data;
};
