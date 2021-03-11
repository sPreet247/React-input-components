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

export const InputHeading = styled.code`
	position: absolute;
	width: 54px;
	height: 12px;
	left: 317px;
	top: 131px;

	font-family: Ubuntu Mono;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 12px;
	color: #333333;
	${(props) =>
		props.error &&
		css`
			display: inline-block;
			left: 317px;
			top: 278px;
		`}
`;

export const Label = styled.label`
	position: absolute;
	width: 31px;
	height: 17px;
	left: 317px;
	top: 159px;

	font-family: Noto Sans JP;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 17px;
	color: #333333;
	${(props) =>
		props.error &&
		css`
			left: 318px;
			top: 306px;
			color: #d32f2f;
		`}
`;

export const Inputs = styled.input.attrs((props) => ({
	type: 'text',
}))`
	position: absolute;
	width: 200px;
	height: 56px;
	left: 317px;
	top: 180px;
	padding-left: 12px;
	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 8px;
	${(props) =>
		props.inputs &&
		css`
			&:hover {
				border: 1px solid #333333;
			}
			&:focus {
				border: 1px solid #2962ff;
			}
		`}
	${(props) =>
		props.error &&
		css`
			left: 318px;
			top: 327px;
			&:hover {
				border: 1px solid #333333;
			}
			&:focus {
				border: 1px solid #d32f2f;
			}
		`}
`;
