import { HelperText, Inputs, InputHover, Label } from './InputElements';

const InputSubComponent = ({
	helperText,
	label,

	...otherProps
}) => {
	return (
		<>
			<HelperText>&lt;{helperText} /&gt;</HelperText>
			<Label>{label}</Label>
			<InputHover placeholder={otherProps.placeholder} />
		</>
	);
};

export default InputSubComponent;
