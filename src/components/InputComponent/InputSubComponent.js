import { HelperText, Inputs, Label } from './InputElements';

const InputSubComponent = ({ helperText, label, className, ...otherProps }) => {
	return (
		<>
			<HelperText>&lt;{helperText} /&gt;</HelperText>
			<Label>{label}</Label>
			<Inputs placeholder={otherProps.placeholder} className={className} />
		</>
	);
};

export default InputSubComponent;
