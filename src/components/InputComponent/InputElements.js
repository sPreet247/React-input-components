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

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HelperText = styled.text`

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
	${(props) =>
		props.disabled &&
		css`
			left: 317px;
			top: 425px;
		`}
		${(props) =>
			props.helperText &&
			css`
				left: 317px;
				top: 572px;
			`}
`;

export const Label = styled.label`
	

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
	${(props) =>
		props.disabled &&
		css`
			left: 317px;
			top: 453px;
		`}

		${(props) =>
			props.helperText &&
			css`
				left: 317px;
				top: 600px;
			`}
`;

export const Inputs = styled.input.attrs((props) => ({
	className: props.className,
}))`
	padding: 0.6rem;
	width: 10rem;

	padding-left: 12px;

	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 8px;
`;
