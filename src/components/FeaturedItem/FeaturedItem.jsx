import React from "react";
import { Card } from "./styles";

export const FeaturedItem = (feature) => {
	const { title, img, location } = feature;

	return (
		<Card>
			<img src={img} alt={title} width="200" height="200" />
			<div>
				<p>{title}</p>
				<p>{location}</p>
			</div>
		</Card>
	);
};
