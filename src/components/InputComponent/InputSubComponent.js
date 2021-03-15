import { HelperText, Inputs, Label } from './InputElements';

const InputSubComponent = ({ helperText, label, hover, ...otherProps }) => {
	return (
		<>
			<HelperText>&lt;{helperText} /&gt;</HelperText>
			<Label>{label}</Label>
			<Inputs placeholder={otherProps.placeholder} hover={hover} />
		</>
	);
};

export default InputSubComponent;
