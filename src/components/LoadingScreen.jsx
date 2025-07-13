import { useState, useEffect } from 'react';
import '../styles/loadingScreen.css';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <div className="loading-content">
          <div className="spinner" />
          <div className="loading-text">
            <span>Connecting</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        </div>
      ) : (
        <div>Your content here after loading...</div>
      )}
    </div>
  );
}
