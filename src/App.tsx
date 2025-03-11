import React, { useState } from "react";
import EventList from "./components/EventLists";
import EventDetails from "./components/EventDetails";

const App: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      {selectedEventId ? (
        <EventDetails
          eventId={selectedEventId}
          onBack={() => setSelectedEventId(null)}
        />
      ) : (
        <EventList onSelectEvent={setSelectedEventId} />
      )}
    </div>
  );
};

export default App;
