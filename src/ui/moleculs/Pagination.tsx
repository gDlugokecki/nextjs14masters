import { PaginationButton } from "@/ui/atoms/PaginationButton";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
};
export const Pagination = ({ currentPage = 1, totalPages }: PaginationProps) => {
	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<ul aria-label="pagination" className="mt-12 flex w-full items-center justify-center gap-8">
			<PaginationButton
				label="<"
				href={`/products/${currentPage - 1}`}
				disabled={currentPage <= 1}
			/>

			{pages.map((page) => {
				return (
					<PaginationButton
						key={page}
						label={page}
						href={`/products/${page}`}
						isActive={page === currentPage}
					/>
				);
			})}
			<PaginationButton
				label=">"
				href={`/products/${currentPage + 1}`}
				disabled={currentPage >= totalPages}
			/>
		</ul>
	);
};
