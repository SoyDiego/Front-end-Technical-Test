import React from "react";
import { Input } from "./styles";

export const Search = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Hola");
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input type="text" placeholder="Search for..." />
		</form>
	);
};
