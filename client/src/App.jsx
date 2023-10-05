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
  
// only added this line because today my windows OS is not working properly 
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);
// Only one line is added to the code 
  return <div>{isModalOpen && <Modal closeModal={closeModal} />}</div>;
}

export default App;
