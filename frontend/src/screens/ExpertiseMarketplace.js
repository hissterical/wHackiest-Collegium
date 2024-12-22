import React, { useState } from 'react';
import '../styles/ExpertiseMarketplace.css';

const ExpertiseMarketplace = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'Need Help with Math Homework',
      description: 'Looking for help with calculus problems.',
      budget: 50,
      type: 'Math',
    },
    {
      id: 2,
      title: 'Assist with Research Paper',
      description: 'Looking for assistance in writing a research paper.',
      budget: 200,
      type: 'Writing',
    },
    {
      id: 3,
      title: 'Language Tutoring',
      description: 'Looking for a tutor for French language.',
      budget: 30,
      type: 'Language',
    },
    // Add more requests with different types as needed
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All'); // 'All' means no filter
  const [newRequest, setNewRequest] = useState({
    title: '',
    description: '',
    budget: '',
    type: 'Math', // Default type
  });
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setRequests([...requests, { ...newRequest, id: requests.length + 1 }]);
    setNewRequest({ title: '', description: '', budget: '', type: 'Math' });
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch = request.title.toLowerCase().includes(searchQuery);
    const matchesType = selectedType === 'All' || request.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="expertise-marketplace-container">
      <h1>Expertise Marketplace</h1>

      <input
        type="text"
        placeholder="Search requests..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      <select onChange={handleTypeChange} value={selectedType} className="filter-select">
        <option value="All">All Types</option>
        <option value="Math">Math</option>
        <option value="Writing">Writing</option>
        <option value="Language">Language</option>
        {/* Add more options based on available types */}
      </select>

      <button onClick={handleOpenModal}>Create New Request</button>

      <div className="requests-list">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <div key={request.id} className="request-card">
              <h3>{request.title}</h3>
              <p>{request.description}</p>
              <p><strong>Budget:</strong> {request.budget}Rs</p>
              <p><strong>Type:</strong> {request.type}</p>
              <button>Contact</button>
            </div>
          ))
        ) : (
          <p className="no-results">No requests found</p>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create New Request</h2>
            <form onSubmit={handleSubmitRequest}>
              <input
                type="text"
                name="title"
                placeholder="Request Title"
                value={newRequest.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Request Description"
                value={newRequest.description}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="budget"
                placeholder="Budget"
                value={newRequest.budget}
                onChange={handleChange}
                required
              />
              <select
                name="type"
                value={newRequest.type}
                onChange={handleChange}
                required
              >
                <option value="Math">Math</option>
                <option value="Writing">Writing</option>
                <option value="Language">Language</option>
                {/* Add more options based on available types */}
              </select>
              <button type="submit">Create Request</button>
              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertiseMarketplace;
