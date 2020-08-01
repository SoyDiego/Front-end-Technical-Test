import React from "react";
import "normalize.css";
import { Container, Wrapper } from "./styles";
import { Search } from "./components/Search/Search";
import { Featured } from "./components/Featured/Featured";
import { PopularAroundYou } from "./components/PopularAroundYou/PopularAroundYou";

function App() {
	return (
		<Container>
			<Search />
			<Wrapper>
				<PopularAroundYou />
				<Featured />
			</Wrapper>
		</Container>
	);
}

export default App;
