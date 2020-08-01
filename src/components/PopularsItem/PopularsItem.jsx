import React from "react";
import { Card } from "./styles";

export const PopularsItem = (popular) => {
	const { title, img, location } = popular;
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
