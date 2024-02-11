import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		price: 1234,
		name: "Basic Tee",
		coverImage: {
			src: "/product_1.jpg",
			alt: "sth",
		},
	},
	{
		id: "2",
		category: "Accessories",
		price: 1234,
		name: "Basic Tee",
		coverImage: {
			src: "/product_2.jpg",
			alt: "sth",
		},
	},
	{
		id: "3",
		category: "Accessories",
		price: 1234,
		name: "Basic Tee",
		coverImage: {
			src: "/product_3.jpg",
			alt: "sth",
		},
	},
	{
		id: "4",
		category: "Accessories",
		price: 1234,
		name: "Basic Tee",
		coverImage: {
			src: "/product_4.jpg",
			alt: "sth",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
