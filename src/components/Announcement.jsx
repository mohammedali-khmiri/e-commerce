import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	padding: 0px 20px;
	background-color: #eee;
	${mobile({ height:"20vh" })}
`;
const Image = styled.img`
	width: 100%;
	height: 80vh;
	z-index: 0;
	margin-bottom: -150px;
	mask-image: linear-gradient(to bottom, rgb(0, 0, 0, 1), rgba(0, 0, 0, 0.25));
	${mobile({ height:"30vh" })}
	`;

const Announcement = () => {
	return (
		<Container>
			<Image src="https://cdn.getyourguide.com/img/tour/5e54f4fc1c26f.jpeg/98.jpg" />
		</Container>
	);
};

export default Announcement;
