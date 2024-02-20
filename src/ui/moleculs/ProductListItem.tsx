import React from "react";
import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductItemType } from "@/types/Product";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link prefetch href={`/product/${product.id}`}>
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
			</Link>
		</li>
	);
};
// className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl"
