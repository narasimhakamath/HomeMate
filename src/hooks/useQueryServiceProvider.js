import { useState, useEffect } from "react";

const useQueryServiceProvider = options => {
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


			const response = {
				name: "Narasimha Kamath",
				imageURI: "https://i.postimg.cc/rshLMz97/Biennale.jpg",
				totalEvents: 1712,
				totalUsers: 63,
				rating: 4.9,
				phoneNumber: "+918848519709",
				whatsappNumber: "+918848519709",
				introduction: "As a dedicated cook, my culinary journey is fueled by a relentless passion for creating memorable dishes that delight the senses. From mastering classic recipes to embracing innovative techniques, I thrive on the thrill of experimentation in the kitchen.",
				pictures: [
					{
						id: 1,
						uri: "https://www.eatingwell.com/thmb/zvHrm_Z8F2qLeJenpJ6lYodtq7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57831531-73819d8ce8f5413cac42cf1c907bc37a.jpg",
					},
					{
						id: 2,
						uri: "https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-Recipe.jpg",
					},
					{
						id: 3,
						uri: "https://c8.alamy.com/comp/2F2PREX/continental-food-ingredients-cottage-cheese-grilled-and-vegetable-slices-2F2PREX.jpg",
					},
					{
						id: 4,
						uri: "https://cdn.tarladalal.com/td_cont_img/White-Sauce-Pasta_.JPG"
					},
					{
						id: 5,
						uri: "https://cookieandkate.com/images/2021/08/best-chickpea-salad-recipe-2.jpg"
					},
					{
						id: 6,
						uri: "https://cafedelites.com/wp-content/uploads/2016/07/Lemon-Herb-Mediterranean-Chicken-Salad-208.jpg"
					},
					{
						id: 7,
						uri: "https://www.eatyourselfskinny.com/wp-content/uploads/2021/07/chicken-salad-44-scaled.jpg",
					},
					{
						id: 8,
						uri: "https://www.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg.transform/845x440/image.jpg",
					},
					{
						id: 9,
						uri: "https://post.healthline.com/wp-content/uploads/2021/09/daal-dal-naan-indian-food-1296x728-header.jpg",
					},
				]
			};

			setData(response);

		} catch(error) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};


	return { isLoading, isError, data };
};

export default useQueryServiceProvider;