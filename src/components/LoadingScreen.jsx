import  { useState, useEffect } from 'react';
import '../styles/loadingScreen.css'; // Import the CSS file

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  // Simulate a delay for loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading screen after 3 seconds (for example)
    }, 3000);
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <div className="loading-text">
          <span className="loading-white">Building</span>
          <span className="loading-red">Ideas...</span>
        </div>
      ) : (
        <div>Your content here after loading...</div> // Content to display after loading
      )}
    </div>
  );
}