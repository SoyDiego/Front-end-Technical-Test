import React, { useState } from "react";
import "normalize.css";
import { Container, Wrapper } from "./styles";
import { Search } from "./components/Search/Search";
import { Featured } from "./components/Featured/Featured";
import { PopularAroundYou } from "./components/PopularAroundYou/PopularAroundYou";
import { FeaturedContext } from "./components/FeaturedContext/FeaturedContext";

function App() {
	const [features, setFeatures] = useState([]);
	const [populars, setPopulars] = useState([]);
	const [filtered, setFiltered] = useState({});

	return (
		<FeaturedContext.Provider
			value={{
				features,
				setFeatures,
				populars,
				setPopulars,
				filtered,
				setFiltered,
			}}>
			<Container>
				<Search />
				<Wrapper>
					<PopularAroundYou />
					<Featured />
				</Wrapper>
			</Container>
		</FeaturedContext.Provider>
	);
}

export default App;
