import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
const sliderItem = (title, pragram, img) => {
	return (
		<div className="slider__item">
			<div className="intro">
				<h2>{title}</h2>
				<p>{pragram}</p>
			</div>
			<div className="img">
				<img src={img} alt="" />
			</div>
		</div>
	);
};

function Marketing() {
	// count ở đây để check xem lúc nào cần disable button.
	let [count, setCount] = useState(0);
	const listSlider__item = document.querySelectorAll(".slider__item").length;

	const Move = useCallback((location) => {
		const widthSlide = document.querySelector(".slider__item").offsetWidth;
		const slideMain = document.querySelector(".slider__main");
		if (location === 1) {
			// ở đây tính toán count, rồi mới setCount bởi vì làm như vậy thì slider transform xong rồi thì count mới được xét lại
			// nếu mà setCount luôn thì sẽ khiến cho component re-render và transform sẽ không được kích hoat (vì nó chỉ chạy khi có click button);
			count--;
			slideMain.style = `transform: translateX(${count * widthSlide}px)`;
			setCount(count);
		} else {
			count++;
			slideMain.style = `transform: translateX(${count * widthSlide}px)`;
			setCount(count);
		}
	}, []);
	return (
		<Container>
			<Inner>
				<div className="slider__wrapper">
					<div className="btn">
						<button
							disabled={count === 0 ? true : false}
							onClick={() => Move(-1)}
							className="btn-move"
						>
							<ArrowBackIosIcon />
							Previous
						</button>
						<button
							disabled={count === 1 - listSlider__item ? true : false}
							onClick={() => Move(1)}
							className="btn-move"
						>
							Next
							<ArrowForwardIosIcon />
						</button>
					</div>
					<SliderMain className="slider__main">
						{sliderItem(
							"Let the right people know you’re open to work",
							"With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
							"./img/Slider/img1.png"
						)}
						{sliderItem(
							"Conversations today could lead to opportunity tomorrow",
							"Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
							"./img/Slider/img2.png"
						)}
						{sliderItem(
							"Stay up to date on your industry",
							"From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
							"./img/Slider/img3.png"
						)}
					</SliderMain>
				</div>
			</Inner>
		</Container>
	);
}

export default Marketing;
const Container = styled.div`
	padding: 6rem 0;
	user-select: none;
`;
const SliderMain = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 330rem;
	height: 45rem;
	transition: transform 0.3s ease-in-out;
`;
const Inner = styled.div`
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	@media screen and (max-width: 1115px) {
		.slider__wrapper {
			padding: 0 !important;
		}
	}
	.slider__wrapper {
		position: relative;
		padding: 5rem 0;
		.btn {
			display: flex;
			gap: 0 2rem;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 10;
		}
		.btn-move {
			display: flex;
			align-items: center;
			padding: 0.5rem 2rem;
			justify-content: center;
			font-size: 1.6rem;
			margin: 0 1rem;
			cursor: pointer;
			&:hover {
				background-color: #eee;
			}
		}
	}
	.slider__item {
		max-width: 110rem;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0 10rem;
		justify-content: center;
		@media screen and (max-width: 1115px) {
			max-width: 110rem;
			gap: 0 5rem;
			.img {
				width: 30rem !important;
				height: 30rem !important;
			}
			.intro {
				max-width: 45rem !important;
				h2 {
					font-size: 2.5rem !important;
				}
				p {
					font-size: 2rem !important;
				}
			}
		}
		@media screen and (max-width: 913px) {
			gap: 0 4rem;
			justify-content: flex-start;
			.img {
				width: 24rem !important;
				height: 24rem !important;
			}
			.intro {
				max-width: 44rem !important;
				h2 {
					font-size: 2.6rem !important;
				}
				p {
					font-size: 2.2rem !important;
				}
			}
		}
		@media screen and (max-width: 450px) {
			gap: 0 3rem;
			.img {
				width: 14rem !important;
				height: 14rem !important;
			}
			.intro {
				max-width: 22rem !important;
				h2 {
					font-size: 2rem !important;
				}
				p {
					font-size: 1.6rem !important;
				}
			}
		}
		.img {
			max-width: 45rem;
			height: 45rem;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.intro {
			max-width: 52rem;
			width: 100%;
			h2 {
				font-size: 3.8rem;
				margin-bottom: 2rem;
				font-weight: 400;
				color: rgb(10, 102, 194);
			}
			p {
				font-size: 2.8rem;
				font-weight: 300;
			}
		}
	}
`;
