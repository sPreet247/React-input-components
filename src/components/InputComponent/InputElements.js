import styled from 'styled-components';

const handleSize = (size) => {
	switch (size) {
		case 'sm':
			return '200px 40px';
		case 'fullWidth':
			return '1031px 56px';
		case 'multiline':
			return '200px 150px';
		default:
			return '200px 50px';
	}
};

export const Heading = styled.h1`
	position: absolute;
	width: 93px;
	height: 36px;
	left: 320px;
	top: 53px;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: #4f4f4f;
`;

export const Inputs = styled.input.attrs((props) => ({
	type: 'text',
}))`
	padding: ${({ size }) => handleSize(size)};
	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 8px;
`;
