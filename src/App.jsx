import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  // Define a state variable to manage the modal's open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Use the useEffect hook to trigger modal after a certain time (e.g., 5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal(); // Open the modal automatically after the specified time
    }, 1000); // Adjust the time (in milliseconds) as needed

    // Clear the timer if the component unmounts or if the modal is manually closed
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {/* Render the Modal component conditionally */}
      {isModalOpen && <Modal closeModal={closeModal} />}

      {/* Other content of your component */}
    </div>
  );
}

export default App;
