import React, { useEffect, useContext } from "react";
import { FeaturedItem } from "../FeaturedItem/FeaturedItem";
import { Title, ContainerFeatures } from "./styles";
import { FeaturedContext } from "../FeaturedContext/FeaturedContext";

export const Featured = () => {
	const { features, setFeatures, filtered } = useContext(FeaturedContext);

	useEffect(() => {
		(async () => {
			const url = `http://demo3136867.mockable.io/featured`;
			const data = await fetch(url);
			const json = await data.json();

			setFeatures(json);
		})();
	}, [setFeatures]);

	const { data } = features;
	return (
		<>
			<Title>Featured</Title>
			<ContainerFeatures>
				{filtered.length > 0
					? filtered.map((feature, index) => (
							<FeaturedItem key={index} {...feature} />
					  ))
					: data &&
					  data.map((feature, index) => (
							<FeaturedItem key={index} {...feature} />
					  ))}
			</ContainerFeatures>
		</>
	);
};
