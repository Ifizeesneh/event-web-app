import React, { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import PetFilter from "./PetFilter";

interface EventListProps {
  onSelectEvent: (eventId: number) => void;
}

const EventList: React.FC<EventListProps> = ({ onSelectEvent }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [petsAllowed, setPetsAllowed] = useState(false);
  const limit = 10;

  const { data, isLoading, isError } = useEvents(
    page,
    limit,
    search,
    petsAllowed
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching events</div>;

  return (
    <div>
      <h2>Events</h2>
      <SearchBar onSearch={setSearch} />
      <PetFilter onToggle={setPetsAllowed} />
      <ul>
        {data?.map((event) => (
          <li
            key={event.id}
            onClick={() => onSelectEvent(event.id)}
            style={{ cursor: "pointer" }}
          >
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil((data?.length || 0) / limit)}
        onPageChange={setPage}
      />
    </div>
  );
};

export default EventList;
