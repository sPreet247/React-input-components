import styled, { css } from 'styled-components';

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

export const Container = styled.div`
	max-width: 1200px;
	padding: 0 15px;
	margin-left: auto;
	margin-right: auto;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	margin-left: 8rem;
	margin-top: 8rem;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;

export const ItemInner = styled.div`
	margin-bottom: 1rem;
`;

export const HelperText = styled.h4`
	font-family: Ubuntu Mono;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 12px;
	color: #333333;
`;

export const Label = styled.label`
	font-family: Noto Sans JP;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 17px;
	color: #333333;
`;

export const Inputs = styled.input`
	padding: 0.6rem;
	width: 10rem;

	padding-left: 12px;

	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 8px;

	${(props) =>
		props.normal &&
		css`
			&:hover {
				border: 1px solid #333333;
			}
			&:focus {
				border: 1px solid #2962ff;
			}
		`}
`;
