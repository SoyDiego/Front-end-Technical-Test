import React, { useState, useEffect } from "react";
import { FeaturedItem } from "../FeaturedItem/FeaturedItem";
import { Title, ContainerFeatures } from "./styles";

export const Featured = () => {
	const [features, setFeatures] = useState([]);
	useEffect(() => {
		(async () => {
			const url = `http://demo3136867.mockable.io/featured`;
			const data = await fetch(url);
			const json = await data.json();

			setFeatures(json);
		})();
	}, []);

	const { data } = features;
	return (
		<>
			<Title>Featured</Title>
			<ContainerFeatures>
				{data && data.map((feature) => <FeaturedItem {...feature} />)}
			</ContainerFeatures>
		</>
	);
};
