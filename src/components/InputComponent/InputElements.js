import styled from 'styled-components';

const handleSize = (size) => {
	switch (size) {
		case 'sm':
			return '40px 200px';
		case 'fullWidth':
			return '56px 1031px';
		case 'multiline':
			return '150px 200px';
		default:
			return '56px 200px';
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
	border-radius: 8px;
`;
