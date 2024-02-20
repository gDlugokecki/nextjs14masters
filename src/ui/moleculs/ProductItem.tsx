import React from "react";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductItemType } from "@/types/Product";

type ProductItemProps = {
	product: ProductItemType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<article>
			<ProductCoverImage {...product.coverImage} />
			<ProductItemDescription
				product={{
					category: product.category,
					name: product.name,
					price: product.price,
				}}
			/>
		</article>
	);
};
