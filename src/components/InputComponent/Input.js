import { Heading, Inputs } from './InputElements';
import InputSubComponent from './InputSubComponent';

function Input() {
	return (
		<>
			<Heading>Inputs</Heading>

			<InputSubComponent
				label="Label"
				helperText="Input"
				placeholder="Placeholder"
				hover={Inputs.error}
			/>

			{/* <InputHeading error>
				<code>&lt;Input error/&gt;</code>
			</InputHeading>
			<Label error>Label</Label>
			<Inputs error placeholder="Placeholder" />

			<InputHeading disabled>
				<code>&lt;Input disabled/&gt;</code>
			</InputHeading>
			<Label disabled>Label</Label>
			<Inputs disabled placeholder="Placeholder" />

			<InputHeading helperText>
				<code>&lt;Input helperText=”Some interesting text”/&gt;</code>
			</InputHeading>
			<Label helperText>Label</Label>
			<Inputs helperText placeholder="Placeholder" /> */}
		</>
	);
}

export default Input;
