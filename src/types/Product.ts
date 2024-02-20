export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	coverImage: {
		alt: string;
		src: string;
	};
};

export type ProductResponseType = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
};
