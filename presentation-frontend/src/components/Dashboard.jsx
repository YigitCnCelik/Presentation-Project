import React, { useState, useEffect } from 'react'; // Import useEffect
import '../assets/Dashboard.css';
import CreatePresentationCard from './CreatePresentationCard';
import DeckHeader from './DeckHeader';
import DashboardCard from './DashboardCard';

const Dashboard = ({ presentations, onTitleUpdate, timeAgo, onDelete, onLinkUpdate }) => {
  const [sortedPresentations, setSortedPresentations] = useState([]);

  // Effect to update sortedPresentations when presentations prop changes
  useEffect(() => {
    setSortedPresentations(presentations);
  }, [presentations]);

  const handleSortChange = (option) => {
    let sorted = [...presentations];
    switch (option.value) {
      case 'title_asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'title_desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'recent':
        sorted.sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated));
        break;
      case 'oldest':
        sorted.sort((a, b) => new Date(a.last_updated) - new Date(b.last_updated));
        break;
      default:
        break;
    }
    setSortedPresentations(sorted); // Update sorted presentations
  };

  return (
    <main className="dashboard-container">
      <section className="header-section">
        <h1 className="gap-2 self-start text-sm font-medium leading-loose text-neutral-800">
          Create a presentation
        </h1>
        <div className="create-cards">
          <CreatePresentationCard />
        </div>
      </section>
      <DeckHeader onSortChange={handleSortChange} />
      <h1 className="gap-2 self-start text-sm font-medium leading-loose text-neutral-800">
        Presentations
      </h1>
      <div className="cards-section">
        {sortedPresentations.map((presentation) => (
          <DashboardCard
            key={presentation.id}
            presentationName={presentation.name}
            createdBy={presentation.created_by}
            lastUpdated={timeAgo(presentation.last_updated)}
            thumbnail={presentation.thumbnail || 'https://via.placeholder.com/150'}
            onDelete={() => onDelete(presentation.id)}
            onTitleUpdate={(newTitle) => onTitleUpdate(presentation.id, newTitle)}
            onLinkUpdate={(updatedData) => onLinkUpdate(presentation.id, updatedData)}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
