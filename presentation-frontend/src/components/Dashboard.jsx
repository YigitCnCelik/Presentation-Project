import React from 'react';
import CreatePresentationCard from './CreatePresentationCard';
import CreateWithAICard from './CreateWithAICard';
import DeckHeader from './DeckHeader';
import DashboardCard from './DashboardCard';

const Dashboard = ({ presentations, onTitleUpdate, timeAgo, onDelete }) => {
  return (
    <main className="flex flex-col mt-7 max-w-full w-[1793px]">
      <section className="flex flex-col self-start max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <h1 className="gap-2 self-start text-sm font-medium leading-loose text-neutral-800">
            Create a presentation
          </h1>
          <div className="flex flex-wrap gap-5 items-start mt-5 max-md:max-w-full">
            <CreatePresentationCard />
            <CreateWithAICard />
          </div>
        </div>
      </section>
      <DeckHeader />
      <div className="flex relative flex-wrap gap-5 items-start mt-5 w-full">
        {presentations.map((presentation) => (
          <DashboardCard
          key={presentation.id}
          presentationName={presentation.name}
          createdBy={presentation.created_by}
          lastUpdated={timeAgo(presentation.last_updated)}
          thumbnail={presentation.thumbnail || 'https://via.placeholder.com/150'}
          onDelete={() => onDelete(presentation.id)}
          onTitleUpdate={(newTitle) => onTitleUpdate(presentation.id, newTitle)}
        />
        
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
