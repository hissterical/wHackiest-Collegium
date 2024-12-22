import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  // State for user profile
  const [profilePicture, setProfilePicture] = useState(null);
  const [usn, setUsn] = useState('');
  const [expertise, setExpertise] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [clubs, setClubs] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Display preview of the image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save profile data (e.g., making an API call to save)
    console.log({
      profilePicture,
      usn,
      expertise,
      hobbies,
      clubs,
    });
  };

  return (
    <div className="profile-container">
      <h1>Set Up Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="profile-picture">
          <label htmlFor="profile-picture">Profile Picture:</label>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleImageChange}
          />
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile Preview"
              className="profile-preview"
            />
          )}
        </div>

        <div className="input-group">
          <label htmlFor="usn">USN (College ID):</label>
          <input
            type="text"
            id="usn"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            placeholder="Enter your USN"
          />
        </div>

        <div className="input-group">
          <label htmlFor="expertise">Areas of Expertise:</label>
          <textarea
            id="expertise"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            placeholder="Enter your areas of expertise"
          />
        </div>

        <div className="input-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <textarea
            id="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            placeholder="Enter your hobbies"
          />
        </div>

        <div className="input-group">
          <label htmlFor="clubs">Clubs You're In:</label>
          <textarea
            id="clubs"
            value={clubs}
            onChange={(e) => setClubs(e.target.value)}
            placeholder="Enter clubs you're part of"
          />
        </div>

        <button type="submit" className="save-button">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
