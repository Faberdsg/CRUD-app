import { useEffect, useState } from 'react';
import { useCrud } from './hooks/useCrud';
import UserContent from './components/UserContent';
import Form from './components/Form';
import Modal from './components/Modal';
import useModal from './hooks/useModal';
import './App.css';

const baseUrl =
	'https://users-crud-api-production-9c59.up.railway.app/api/v1/users';

function App() {
	const [
		{ results: users },
		loading,
		error,
		{ getAll, create, update, remove },
	] = useCrud(baseUrl);

	const { isOpen, openModal, closeModal, modalContent, setModalContent } =
		useModal();

	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		getAll();
	}, []);

	const handleCreate = (dataForm) => {
		create(dataForm);
		closeModal();
	};

	const handleAdd = () => {
		openModal();
		setModalContent(<Form onSubmit={handleCreate} />);
	};

	const handleDelete = (user) => {
		const confirmDelete = window.confirm(
			`Are you sure you want to delete ${user.first_name} ${user.last_name}?`,
		);
		if (confirmDelete) {
			remove(user.id);
		}
	};

	const handleCancel = () => {
		setSelectedUser(null);
		closeModal();
	};

	const handleUpdate = (dataForm) => {
		update(dataForm.id, dataForm);
		setSelectedUser(null);
		closeModal();
	};

	const handleEdit = (user) => {
		setSelectedUser(user);
		openModal();
		setModalContent(
			<Form onSubmit={handleUpdate} onCancel={handleCancel} user={user} />,
		);
	};

	return (
		<div className="App">
			<div className="header">
				<h1 className="title">User CRUD</h1>

				<button onClick={handleAdd} className="btn btn-primary">
					Add User
				</button>

				{error && <p className="errors">{error}</p>}

				{loading ? (
					<p>Loading...</p>
				) : (
					users && (
						<UserContent
							users={users}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					)
				)}

				<Modal isOpen={isOpen} closeModal={closeModal}>
					{modalContent}
				</Modal>
			</div>
		</div>
	);
}

export default App;
