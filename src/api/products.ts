import { productRepsonseItemToProductItemType } from "@/api/product.utils";
import { type ProductResponseType } from "@/types/Product";

const apiUrl = process.env.API_URL;

export const getProductsWithPagination = async (take?: number, offset?: number) => {
	const takeQueryParam = take ? `?take=${take}` : "";
	const offsetQueryParam = offset ? `&offset=${offset}` : "";

	const url = `${apiUrl}/products${takeQueryParam}${offsetQueryParam}`;

	const response = await fetch(`${url}`);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const productsResponse = (await response.json()) as ProductResponseType[];

	const products = productsResponse.map(productRepsonseItemToProductItemType);

	return products;
};
