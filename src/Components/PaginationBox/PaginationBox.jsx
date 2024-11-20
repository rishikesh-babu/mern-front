// import Pagination from 'react-bootstrap/Pagination';

// function PaginationBox({ nextPage, pageNo, maxPageNo }) {
// 	const startPage = Math.max(1, pageNo + 2)
// 	const endPage = Math.min(maxPageNo, pageNo + 2)
// 	const pages = []

// 	for (let i = startPage; i <= endPage; ++i) {
// 		pages.push(
// 			<Pagination.Item key={i} active={i === pageNo} onClick={() => nextPage(i)} >
// 				{i}
// 			</Pagination.Item> 
// 		)
// 	}
// 	return (
// 		<Pagination>
// 			<Pagination.First onClick={() => nextPage(1)} disabled={pageNo === 1} />
// 			<Pagination.Prev onClick={() => nextPage(pageNo - 1)} disabled={pageNo === 1} />

// 				{startPage > 1 && <Pagination.Ellipsis />}

// 				{pages}

// 				{endPage < maxPageNo && <Pagination.Ellipsis />}
// 			<Pagination.Next onClick={() => nextPage(pageNo + 1)} disabled={pageNo === maxPageNo} />
// 			<Pagination.Last onClick={() => nextPage(maxPageNo)} disabled={pageNo === maxPageNo} />
// 		</Pagination>
// 	);
// }

// export default PaginationBox;

// ____________________________________________________________________________________________________________________________________________________

// import Pagination from 'react-bootstrap/Pagination';

// function PaginationBox({ nextPage, pageNo, maxPageNo }) {
//   const startPage = Math.max(1, pageNo - 2);
//   const endPage = Math.min(maxPageNo, pageNo + 2);
//   const pages = [];

//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(
//       <Pagination.Item key={i} active={i === pageNo} onClick={() => nextPage(i)}>
//         {i}
//       </Pagination.Item>
//     );
//   }

//   return (
//     <Pagination>
//       <Pagination.First onClick={() => nextPage(1)} disabled={pageNo === 1} />
//       <Pagination.Prev onClick={() => nextPage(pageNo - 1)} disabled={pageNo === 1} />

//       {startPage > 1 && <Pagination.Ellipsis />}

//       {pages}

//       {endPage < maxPageNo && <Pagination.Ellipsis />}

//       <Pagination.Next onClick={() => nextPage(pageNo + 1)} disabled={pageNo === maxPageNo} />
//       <Pagination.Last onClick={() => nextPage(maxPageNo)} disabled={pageNo === maxPageNo} />
//     </Pagination>
//   );
// }

// export default PaginationBox;

// ----------------------------------------------------------------------------------------------------------------------------------------


import Pagination from 'react-bootstrap/Pagination';

function PaginationBox({ nextPage, pageNo, maxPageNo }) {
	const startPage = Math.max(1, pageNo - 2);
	const endPage = Math.min(maxPageNo, pageNo + 2);
	const pages = [];

	for (let i = startPage; i <= endPage; i++) {
		pages.push(
			<Pagination.Item
				key={i}
				active={i === pageNo}
				onClick={() => nextPage(i)}
				aria-label={`Go to page ${i}`}
			>
				{i}
			</Pagination.Item>
		);
	}

	return (
		<Pagination>
			<Pagination.First
				onClick={() => nextPage(1)}
				disabled={pageNo === 1}
				aria-label="Go to first page"
			/>
			<Pagination.Prev
				onClick={() => nextPage(pageNo - 1)}
				disabled={pageNo === 1}
				aria-label="Go to previous page"
			/>

			{startPage > 2 && <Pagination.Item onClick={() => nextPage(1)}>1</Pagination.Item>}
			{startPage > 2 && <Pagination.Ellipsis disabled aria-hidden="true" />}

			{pages}

			{endPage < maxPageNo - 1 && <Pagination.Ellipsis disabled aria-hidden="true" />}
			{endPage < maxPageNo && (
				<Pagination.Item onClick={() => nextPage(maxPageNo)}>{maxPageNo}</Pagination.Item>
			)}

			<Pagination.Next
				onClick={() => nextPage(pageNo + 1)}
				disabled={pageNo === maxPageNo}
				aria-label="Go to next page"
			/>
			<Pagination.Last
				onClick={() => nextPage(maxPageNo)}
				disabled={pageNo === maxPageNo}
				aria-label="Go to last page"
			/>
		</Pagination>
	);
}

export default PaginationBox;
