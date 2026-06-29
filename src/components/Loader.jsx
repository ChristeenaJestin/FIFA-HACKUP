import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ children }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return (

      <div className="loader">

        <h1>⚽ FIFA MATCH CENTER</h1>

        <p>Loading Match Data...</p>

        <div className="loading-bar">

          <div className="loading-fill"></div>

        </div>

      </div>

    );

  }

  return children;

}

export default Loader;