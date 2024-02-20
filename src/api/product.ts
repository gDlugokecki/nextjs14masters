import { type ProductResponseType } from "@/types/Product";
import { productRepsonseItemToProductItemType } from "@/api/product.utils";

const apiUrl = process.env.API_URL;

export const getProductById = async (id: string) => {
	const response = await fetch(`${apiUrl}/products/${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch product");
	}
	const productResponse = (await response.json()) as ProductResponseType;

	const product = productRepsonseItemToProductItemType(productResponse);

	return product;
};
