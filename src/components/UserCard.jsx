import { formatDate } from '../lib/utils';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { GoGift } from 'react-icons/go';
import './UserCard.css';

function UserCard({ user, onEdit, onDelete }) {
	return (
		<div className="card">
			{user.image_url && (
				<img
					src={user.image_url}
					alt={user.first_name}
					width={85}
					height={85}
				/>
			)}
			<h2>
				{user.first_name} {user.last_name}
			</h2>
			<p>{user.email}</p>
			<p>
				<GoGift /> {formatDate(user.birthday)}
			</p>

			<div>
				<button onClick={() => onEdit(user)}>
					<FiEdit />
				</button>
				<button onClick={() => onDelete(user)} style={{ marginLeft: 10 }}>
					<FiTrash2 />
				</button>
			</div>
		</div>
	);
}

export default UserCard;
