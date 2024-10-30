import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePresentationForm = ({ createPresentation }) => {
  const [name, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !thumbnail || !createdBy) {
      setError('Lütfen tüm alanları doldurun.');
    } else {
      createPresentation({ name, thumbnail, created_by: createdBy });
      navigate('/'); // Ana sayfaya yönlendir
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Yeni Sunum Oluştur</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tittle"
          value={name}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', margin: '10px 0' }}
        />
        <input
          type="text"
          placeholder="Thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', margin: '10px 0' }}
        />
        <input
          type="text"
          placeholder="Created By"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px', margin: '10px 0' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Sunum Ekle
        </button>
      </form>
    </div>
  );
};

export default CreatePresentationForm;
