import React from 'react';
import '../scss/usersDashboard.scss';

const usersDashboard = (props) => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div id="profile-pic-1">
        <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader}/>
        <div id="profile-pic-container" onClick={() => imageUploader.current.click()}>
          <img id="profile-image" ref={uploadedImage}/>
        </div>
        <p id="user-dashboard-title">User Dashboard</p>
      </div>
    );
}

export default usersDashboard;
  