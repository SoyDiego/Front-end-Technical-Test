import React, { useContext } from "react";
import { Input } from "./styles";
import { FeaturedContext } from "../FeaturedContext/FeaturedContext";

export const Search = () => {
	const { features, setFiltered } = useContext(FeaturedContext);

	let filteredFeature;
	const handleChange = (e) => {
		filteredFeature = features.filter((feature) =>
			RegExp(e.target.value, "gi").test(feature.title)
		);
		setFiltered(filteredFeature);
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
