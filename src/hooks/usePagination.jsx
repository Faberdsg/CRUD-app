import { useState } from 'react';

export function usePagination(array = []) {
	const [page, setPage] = useState(1);
	const maxItemsPerPager = 5;

	const prev = () => {
		setPage(page - 1);
	};

	const next = () => {
		setPage(page + 1);
	};

	const totalPages = Math.ceil(array.length / maxItemsPerPage);

	const items = array.slice(
		(page - 1) * maxItemsPerPage,
		page * maxItemsPerPage,
	);

	return {
		page,
		totalPages,
		items,
		prev,
		next,
	};
}
