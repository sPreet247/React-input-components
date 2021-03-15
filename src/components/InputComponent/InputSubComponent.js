import { HelperText, Inputs, Label } from './InputElements';

const InputSubComponent = ({ helperText, label, inputs, ...otherProps }) => {
	return (
		<>
			<HelperText>&lt;{helperText} /&gt;</HelperText>
			<Label>{label}</Label>
			<Inputs placeholder={otherProps.placeholder} inputs={inputs} />
		</>
	);
};

export default InputSubComponent;
