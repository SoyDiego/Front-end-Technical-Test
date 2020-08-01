import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title, Container } from "./styles";
import { PopularsItem } from "../PopularsItem/PopularsItem";
import { FeaturedContext } from "../FeaturedContext/FeaturedContext";

export const PopularAroundYou = () => {
	const { populars, setPopulars } = useContext(FeaturedContext);

	useEffect(() => {
		(async () => {
			const url = "http://demo3136867.mockable.io/carousel";
			const data = await fetch(url);
			const json = await data.json();

			setPopulars(json);
		})();
	}, [setPopulars]);

	const { data } = populars;

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "#8CC1ED" }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: "block", background: "#8CC1ED" }}
				onClick={onClick}
			/>
		);
	}
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
					{data &&
						data.map((popular, index) => (
							<PopularsItem key={index} {...popular} />
						))}
				</Slider>
			</Container>
		</>
	);
};
