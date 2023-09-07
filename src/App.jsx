import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div>{isModalOpen && <Modal closeModal={closeModal} />}</div>;
}

export default App;
