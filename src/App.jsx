import React from "react";
import "normalize.css";
import { Container, Wrapper } from "./styles";
import { Search } from "./components/Search/Search";
import { Featured } from "./components/Featured/Featured";

function App() {
	return (
		<Container>
			<Search />
			<Wrapper>
				<Featured />
			</Wrapper>
		</Container>
	);
}

export default App;
