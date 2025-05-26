import { useState } from 'react';

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return { isOpen, openModal, closeModal, modalContent, setModalContent }; // ✅ dentro de la función
};

export default useModal;
