import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);
  return [isModalOpen, openModal, closeModal];
}
