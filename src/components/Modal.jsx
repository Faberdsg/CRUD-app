import './Modal.css';

function Modal({ isOpen, closeModal, children }) {
	return (
		<div
			className={`modal ${isOpen ? 'show-modal' : ''}`}
			onClick={closeModal}
			role="dialog"
			aria-modal="true"
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={closeModal}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;
