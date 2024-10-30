import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import CreatePresentationForm from './components/CreatePresentationForm';
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

  const createPresentation = async (newPresentation) => {
    console.log(newPresentation);
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

  const handleLinkUpdate = async (id, updatedData) => {
    const updatedPresentation = presentations.find((p) => p.id === id);
    if (updatedPresentation) {
      await updatePresentation(id, { ...updatedPresentation, thumbnail: updatedData });
    }
  };

  useEffect(() => {
    fetchPresentations();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              presentations={presentations}
              onTitleUpdate={handleTitleUpdate}
              onDelete={deletePresentation}
              onLinkUpdate={handleLinkUpdate}
              timeAgo={timeAgo}
            />
          }
        />
        <Route
          path="/create"
          element={<CreatePresentationForm createPresentation={createPresentation} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
