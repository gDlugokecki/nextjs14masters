import { getProductsWithPagination } from "@/api/products";
import { NUMBER_OF_PRODUCTS_ON_PAGE } from "@/app/constants";
import { ProductList } from "@/ui/organisms/ProductList";

export type ProductsPageType = {
	params: {
		page: string;
	};
};

export async function generateStaticParams() {
	const products = await getProductsWithPagination();
	const totalPages = Math.ceil(products.length / NUMBER_OF_PRODUCTS_ON_PAGE);
	const staticPaths = Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => ({
		params: { page: [String(page)] },
	}));
	return staticPaths;
}

export default async function ProductPage({ params }: ProductsPageType) {
	const offest = params.page
		? Number(params.page[0]) * NUMBER_OF_PRODUCTS_ON_PAGE - NUMBER_OF_PRODUCTS_ON_PAGE
		: 0;

	const products = await getProductsWithPagination(20, offest);

	return <ProductList products={products} />;
}
