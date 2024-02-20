import { type Metadata } from "next";
import { getProductById } from "@/api/product";
import { ProductItem } from "@/ui/moleculs/ProductItem";

type Params = {
	params: {
		id: string;
	};
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const product = await getProductById(params.id);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.coverImage.src,
					alt: product.coverImage.alt,
				},
			],
		},
	};
};

export default async function ProductPage({ params }: Params) {
	const product = await getProductById(params.id);
	return (
		<section className="md:mx-24">
			<ProductItem product={product} />
		</section>
	);
}
