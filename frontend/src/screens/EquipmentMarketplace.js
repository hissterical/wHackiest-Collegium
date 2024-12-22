import React, { useState } from 'react';
import '../styles/EquipmentMarketplace.css';

const EquipmentMarketplace = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Scientific Calculator',
      description: 'A scientific calculator with advanced features.',
      price: 30,
    },
    {
      id: 2,
      name: 'Lab Coat',
      description: 'White lab coat for science experiments.',
      price: 50,
    },
    {
      id: 3,
      name: 'Stethoscope',
      description: 'High-quality stethoscope for medical professionals.',
      price: 100,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: '', description: '', price: '' });
    setShowModal(false);
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
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> {item.price}Rs</p>
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
                name="name"
                placeholder="Item Name"
                value={newItem.name}
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
                type="number"
                name="price"
                placeholder="Price"
                value={newItem.price}
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
