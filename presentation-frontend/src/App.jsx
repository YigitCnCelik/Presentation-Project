import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { timeAgo } from './utility/timeAgo';

const BASE_URL = 'http://localhost:5000/presentations';

function App() {
  const [presentations, setPresentations] = useState([]);

  const fetchPresentations = async () => {
    try {
      const response = await fetch(`${BASE_URL}`);
      const data = await response.json();
      setPresentations(data);
    } catch (error) {
      console.error('Sunumları alırken hata oluştu:', error);
    }
  };

  const addPresentation = async (newPresentation) => {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPresentation),
      });
      const data = await response.json();
      setPresentations((prev) => [...prev, data]);
    } catch (error) {
      console.error('Sunum eklenirken hata oluştu:', error);
    }
  };

  const updatePresentation = async (id, updatedPresentation) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPresentation),
      });
      fetchPresentations();
    } catch (error) {
      console.error('Sunum güncellenirken hata oluştu:', error);
    }
  };

  const deletePresentation = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      setPresentations((prev) => prev.filter((presentation) => presentation.id !== id));
    } catch (error) {
      console.error('Sunum silinirken hata oluştu:', error);
    }
  };

  const handleTitleUpdate = (id, newTitle) => {
    const updatedPresentation = presentations.find((p) => p.id === id);
    if (updatedPresentation) {
      updatePresentation(id, { ...updatedPresentation, name: newTitle });
    }
  };

  useEffect(() => {
    fetchPresentations();
  }, []);

  return (
    <div>
      <h1>Presentations</h1>
      <Dashboard
        presentations={presentations}
        onTitleUpdate={handleTitleUpdate}
        onDelete={deletePresentation}
        timeAgo={timeAgo}
      />
    </div>
  );
}

export default App;
