import { type ReactNode } from "react";
import { getProductsWithPagination } from "@/api/products";
import { Pagination } from "@/ui/moleculs/Pagination";
import { NUMBER_OF_PRODUCTS_ON_PAGE } from "@/app/constants";

type ProductsLayoutType = {
	children: ReactNode;
	params: {
		page: string;
	};
};

export default async function ProductsLayout({ children, params }: ProductsLayoutType) {
	const products = await getProductsWithPagination();
	const page = params.page;

	return (
		<section>
			{children}
			<Pagination
				totalPages={Math.ceil(products.length / NUMBER_OF_PRODUCTS_ON_PAGE)}
				currentPage={Number(page)}
			/>
		</section>
	);
}
