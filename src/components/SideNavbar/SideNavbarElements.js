import styled, { css } from 'styled-components';

export const Title = styled.h3`
	position: absolute;
	width: 114px;
	height: 20px;
	left: 48px;
	top: 38px;

	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 19px;

	/* identical to box height */

	color: #f7542e;
`;

export const NavLink = styled.a`
  position: absolute;

  height: 20px;
  left: 48px;

  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #9e9e9e;

  ${(props) =>
		props.colors &&
		css`
			top: 180px;
			width: 62px;
		`}
  ${(props) =>
		props.typography &&
		css`
			top: 225px;
			width: 80px;
		`}
  ${(props) =>
		props.spaces &&
		css`
			top: 277px;
			width: 47px;
		`}
  ${(props) =>
		props.buttons &&
		css`
			top: 327px;
			width: 53px;
			font-weight: bold;
			color: #090f31;
		`}
  ${(props) =>
		props.inputs &&
		css`
			top: 375px;
			width: 45px;
		`}
  ${(props) =>
		props.grid &&
		css`
			top: 430px;
			width: 29px;
		`}
`;
