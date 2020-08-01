import React, { useEffect, useContext } from "react";
import { FeaturedItem } from "../FeaturedItem/FeaturedItem";
import { Title, ContainerFeatures } from "./styles";
import { FeaturedContext } from "../FeaturedContext/FeaturedContext";

export const Featured = () => {
	const { features, setFeatures, filtered } = useContext(FeaturedContext);

	useEffect(() => {
		(async () => {
			const url = "https://national-parks-reactjs.herokuapp.com/db";
			const data = await fetch(url);
			const json = await data.json();

			setFeatures(json.featured);
		})();
	}, [setFeatures]);

	return (
		<>
			<Title>Featured</Title>
			<ContainerFeatures>
				{filtered.length > 0
					? filtered.map((feature, index) => (
							<FeaturedItem key={index} {...feature} />
					  ))
					: features &&
					  features.map((feature, index) => (
							<FeaturedItem key={index} {...feature} />
					  ))}
			</ContainerFeatures>
		</>
	);
};
