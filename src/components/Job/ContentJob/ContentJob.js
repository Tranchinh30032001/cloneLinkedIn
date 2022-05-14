import React from "react";
import styled from "styled-components";
import { DataContent } from "./DataContent";
import JobRecommend from "./JobRecommend";
import LazyLoad from "react-lazyload";

function ContentJob() {
	return (
		<Content>
			<Recommend>
				<Inner>
					<div className="heading">
						<h2 className="title">Recommended for you</h2>
						<p className="subTitle">Based on your profile and search history</p>
					</div>
					<div className="list__recommend">
						{DataContent?.length > 0 &&
							DataContent.map((item, index) => {
								return (
									<LazyLoad once={true} key={index} height={150} offset={100}>
										<JobRecommend key={index} {...item} />
									</LazyLoad>
								);
							})}
					</div>
				</Inner>
			</Recommend>
		</Content>
	);
}
export default ContentJob;
const Content = styled.div`
	max-width: 53rem;
	width: 100%;
	margin-left: 24.6rem;
	border: 1px solid #ccc;
	border-radius: 1rem;
	background-color: #ffffff;
	@media screen and (max-width: 723px) {
		margin: 0;
	}
	@media screen and (max-width: 530px) {
		max-width: 50rem;
		width: 100%;
	}
`;
const Inner = styled.div`
	padding: 2rem;
	.heading {
		margin-bottom: 2rem;
	}
	.title {
		font-size: 1.8rem;
		color: #666;
	}
	.subTitle {
		font-size: 1.3rem;
		color: #666;
		margin-top: 0.4rem;
	}
`;
const Recommend = styled.div``;
