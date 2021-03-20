import { HelperText, Inputs, Label } from './InputElements';

const InputSubComponent = ({
	helperText,
	label,

	...otherProps
}) => {
	return (
		<>
			<HelperText>&lt;Input {helperText} /&gt;</HelperText>
			<Label>{label}</Label>
			<Inputs placeholder={otherProps.placeholder} />
		</>
	);
};

export default InputSubComponent;
