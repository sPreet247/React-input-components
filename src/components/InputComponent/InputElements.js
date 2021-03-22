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

	margin-left: 5rem;
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


	${(props) =>
		props.error &&
		css`
			color: ${(props) => (props.error ? '#D32F2F' : '#828282')};
		`}
  
  ${(props) =>
		props.hover &&
		css`
			color: #333333;
		`}
  
  ${(props) =>
		props.focus &&
		css`
			color: #2962ff;
			/* border: ${(props) => (props.error ? '#D32F2F' : '#2962FF')}; */
		`}
`;

export const Inputs = styled.input`
	padding: 0.6rem;
	width: 10rem;

${(props) =>
	props.size === 'sm' &&
	css`
		padding: 0.2rem;
	`}

	${(props) =>
		props.size === 'fl' &&
		css`
			width: 100%;
		`}

		${(props) =>
			props.size === 'ml' &&
			css`
				min-height: 150px;
				max-height: 150px;
			`}
  
	
	padding-left: 12px;

	border: ${(props) => (props.error ? '1px solid #D32F2F' : '1px solid #828282')};
	box-sizing: border-box;
	border-radius: 8px;

	:hover {
    border: 1px solid #333333;
	
  }
  
  :focus,
  :focus-within,
  :focus-visible {
    
		border: ${(props) => (props.error ? '1px solid #D32F2F' : '1px solid #2962FF')};
  }

  ${(props) =>
		props.hover &&
		css`
			border: 1px solid #333333;
		`}
  
  ${(props) =>
		props.focus &&
		css`
			border: 1px solid #2962ff;
		`}


		${(props) =>
			props.error &&
			css`
				border: 1px solid #d32f2f;
				&focus {
					border: 1px solid #d32f2f;
				}
			`}  	

  ${(props) =>
		props.disabled &&
		css`
			cursor: not-allowed;
			border: none;
			:hover {
				border: none;
			}
		`}
  
`;

export const IconComponent = styled.div`
	display: flex;
`;

export const SizeComponent = styled.div`
	display: flex;
`;

export const PhoneIcon = styled.div`
	position: absolute;
	padding: 1.5rem;
`;
