import React, { useContext } from "react";
import { Input } from "./styles";
import { FeaturedContext } from "../FeaturedContext/FeaturedContext";

export const Search = () => {
	const { features, setFiltered } = useContext(FeaturedContext);
	const { data } = features;

	let filteredFeature;
	const handleChange = (e) => {
		filteredFeature = data.filter((feature) =>
			RegExp(e.target.value, "gi").test(feature.title)
		);
		setFiltered(filteredFeature);
		console.log(filteredFeature);
	};

	return (
		<form>
			<Input
				type="text"
				placeholder="Search for..."
				value={filteredFeature}
				onChange={handleChange}
			/>
		</form>
	);
};
