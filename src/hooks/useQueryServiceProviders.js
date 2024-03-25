import { useState, useEffect } from "react";

const useQueryServiceProviders = options => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			// const response = await fetch(`www.google.com/${options?.serviceProviderID}`);
			// if(!response.ok)
			// 	throw new Error('Failed to fetch data');

			// const serverResponse = await response.json();
			// setData(serverResponse);

			const response = [
				{
					id: 1,
					name: 'Narasimha Kamath',
					imageURI: "https://i.postimg.cc/rshLMz97/Biennale.jpg",
					rating: 4,
					ratingCount: 63,
					isFavourite: true,
					rate: 250,
				},
				{
					id: 2,
					name: 'John Doe',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/42.jpg',
					rating: 4.5,
					ratingCount: 59,
					isFavourite: true,
					rate: 220,
				},
				{
					id: 3,
					name: 'Jane Smith',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/62.jpg',
					rating: 3.8,
					ratingCount: 44,
					isFavourite: false,
					rate: 200,
				},
				{
					id: 4,
					name: 'Alice Johnson',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/38.jpg',
					rating: 4.2,
					ratingCount: 53,
					isFavourite: false,
					rate: 350,
				},
				{
					id: 5,
					name: 'Bob Brown',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/69.jpg',
					rating: 4.0,
					ratingCount: 38,
					isFavourite: false,
					rate: 280,
				},
				{
					id: 6,
					name: 'Emily Williams',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/female/35.jpg',
					rating: 4.6,
					ratingCount: 35,
					isFavourite: false,
					rate: 330,
				},
				{
					id: 7,
					name: 'Michael Wilson',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/44.jpg',
					rating: 4.3,
					ratingCount: 24,
					isFavourite: false,
					rate: 265,
				},
				{
					id: 8,
					name: 'Emma Jones',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/female/39.jpg',
					rating: 3.9,
					ratingCount: 19,
					isFavourite: true,
					rate: 180,
				},
				{
					id: 9,
					name: 'William Taylor',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
					rating: 4.7,
					ratingCount: 19,
					isFavourite: false,
					rate: 300,
				},
				{
					id: 10,
					name: 'Olivia Anderson',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/female/33.jpg',
					rating: 4.1,
					ratingCount: 13,
					isFavourite: true,
					rate: 260,
				},
				{
					id: 11,
					name: 'James Martinez',
					imageURI: 'https://xsgames.co/randomusers/assets/avatars/male/22.jpg',
					rating: 3.5,
					ratingCount: 7,
					isFavourite: false,
					rate: 130,
				},
			];

			setData(response);

		} catch(error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};


	return { isLoading, isError, data };
};

export default useQueryServiceProviders;