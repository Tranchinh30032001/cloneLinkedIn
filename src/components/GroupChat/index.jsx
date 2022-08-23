import { Avatar } from "@material-ui/core";
import React, { memo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedRoomId } from "../../redux/UserSlice";

function GroupChat({ nameGroup, id, imageGroupChat }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSelectRoom = () => {
		if (id) {
			navigate(`room/${id}`);
			dispatch(selectedRoomId(id));
		}
	};
	return (
		<Container onClick={handleSelectRoom}>
			<Flex>
				<Avatar
					src={imageGroupChat}
					style={{ width: "3.6rem", height: "3.6rem" }}
				/>
				<Box>
					<h3>{nameGroup ? nameGroup : ""}</h3>
				</Box>
			</Flex>
		</Container>
	);
}

export default memo(GroupChat);
const Container = styled.div`
	padding: 1rem 0;
	margin-top: 0.6rem;
	&:hover {
		/* opacity: 0.6; */
		background-color: #ffff;
		color: #000;
	}
`;
const Box = styled.div`
	margin-left: 1.2rem;
`;
const Flex = styled.div`
	padding: 0 1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	h3 {
		font-size: 1.4rem;
	}
	p {
		font-size: 1.3rem;
	}
`;
