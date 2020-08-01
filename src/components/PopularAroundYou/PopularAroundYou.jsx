import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title, Container } from "./styles";
import { PopularsItem } from "../PopularsItem/PopularsItem";
import { FeaturedContext } from "../FeaturedContext/FeaturedContext";
import { SampleNextArrow, SamplePrevArrow } from "../../utils/utils";

export const PopularAroundYou = () => {
	const { populars, setPopulars } = useContext(FeaturedContext);

	useEffect(() => {
		(async () => {
			const url = "https://national-parks-reactjs.herokuapp.com/db";
			const data = await fetch(url);
			const json = await data.json();

			setPopulars(json.carousel);
		})();
	}, [setPopulars]);

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1500,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<>
			<Title>Popular around you</Title>
			<Container>
				<Slider {...settings}>
					{populars &&
						populars.map((popular, index) => (
							<PopularsItem key={index} {...popular} />
						))}
				</Slider>
			</Container>
		</>
	);
};
