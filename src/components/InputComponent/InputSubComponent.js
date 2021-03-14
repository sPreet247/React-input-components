import { HelperText, Inputs, Label } from './InputElements';

const InputSubComponent = ({ children }) => {
	return (
		<>
			<HelperText>&lt;{children} /&gt;</HelperText>
			<Label>Label</Label>
			<Inputs inputs placeholder="Placeholder" />
		</>
	);
};

export default InputSubComponent;
