import React from "react";
import { useEventById } from "../hooks/useEvents";

interface EventDetailsProps {
  eventId: number;
  onBack: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ eventId, onBack }) => {
  const { data, isLoading, isError } = useEventById(eventId.toString());

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching event details</div>;

  return (
    <div>
      <button onClick={onBack}>Back to Events</button>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <p>{data?.date}</p>
      <p>{data?.location}</p>
      <p>{data?.petsAllowed ? "Pets Allowed" : "No Pets Allowed"}</p>
    </div>
  );
};

export default EventDetails;
