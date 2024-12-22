import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EquipmentMarketplace.css';

const EquipmentMarketplace = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newItem, setNewItem] = useState({
    userId:localStorage.getItem('userId') ,
    title: '',
    description: '',
    tag: 'equipment',
    payment: ''
  });
  const [showModal, setShowModal] = useState(false);

  const API_URL = 'https://w-hackiest-collegium-git-main-draxs-projects-939fc184.vercel.app/api/posts'; // Replace with your API endpoint

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_URL);
        setItems(response.data); // Assuming API returns an array of posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitItem = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior.
  
    try {
      // Send the new post to the API
      const response = await axios.post("https://w-hackiest-collegium-git-main-draxs-projects-939fc184.vercel.app/api/posts", newItem);
  
      // Update the state with the new item from the response
      setItems((prevItems) => [...prevItems, response.data]);
  
      // Reset the form and close the modal
      setNewItem({
        userId:localStorage.getItem('userId') ,
        title: '',
        description: '',
        tag: 'equipment',
        payment: ''
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error posting new item:', error); // Log any errors
    }
  };
  

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="equipment-marketplace-container">
      <h1>Equipment Marketplace</h1>

      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      <button onClick={handleOpenModal}>Add New Item</button>

      <div className="items-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item._id} className="item-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>Payment:</strong> {item.payment}</p>
              <button>Contact</button>
            </div>
          ))
        ) : (
          <p className="no-results">No items found</p>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmitItem}>
              <input
                type="text"
                name="title"
                placeholder="Item Title"
                value={newItem.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Item Description"
                value={newItem.description}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="payment"
                placeholder="Payment"
                value={newItem.payment}
                onChange={handleChange}
                required
              />
              <button type="submit">Add Item</button>
              <button type="button" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EquipmentMarketplace;
