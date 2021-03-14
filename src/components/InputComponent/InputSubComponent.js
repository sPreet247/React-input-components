import { HelperText, Inputs, Label } from './InputElements';

const InputSubComponent = (props) => {
	return (
		<>
			<HelperText>
				<code>&lt;Input/&gt;</code>
			</HelperText>
			<Label>Label</Label>
			<Inputs inputs placeholder="Placeholder" />
		</>
	);
};

export default InputSubComponent;
