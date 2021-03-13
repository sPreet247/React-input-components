import { InputHeading, Inputs, Label } from './InputElements';

const InputSubComponent = (props) => {
	return (
		<>
			<InputHeading>
				<code>&lt;Input/&gt;</code>
			</InputHeading>
			<Label>Label</Label>
			<Inputs inputs placeholder="Placeholder" />
		</>
	);
};

export default InputSubComponent;
