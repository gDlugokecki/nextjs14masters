import { type ProductItemType, type ProductResponseType } from "@/types/Product";

export const productRepsonseItemToProductItemType = (
	product: ProductResponseType,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		description: product.description,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};
