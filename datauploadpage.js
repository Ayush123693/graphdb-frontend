// DataUploadPage.js
import React, { useState } from 'react';

const DataUploadPage = () => {
  const [githubLink, setGithubLink] = useState('');
  
  const handleInputChange = (e) => {
    setGithubLink(e.target.value);
  };

  const handleDataUpload = () => {
    // Handle data upload logic here (e.g., fetch data from the GitHub link)
    console.log('Fetching data from GitHub link:', githubLink);
  };

  return (
    <div>
      <h1>Data Upload Page</h1>
      <input
        type="text"
        placeholder="Enter GitHub link for data upload"
        value={githubLink}
        onChange={handleInputChange}
      />
      <button onClick={handleDataUpload}>Upload Data</button>
    </div>
  );
};

export default DataUploadPage;