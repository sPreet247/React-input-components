import { Heading, InputHeading, Inputs, Label } from './InputElements';

export default function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<InputHeading>
				<code>&lt;Input/&gt;</code>
			</InputHeading>
			<Label>Label</Label>
			<Inputs inputs placeholder="Placeholder" />

			<InputHeading error>
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
			<Inputs helperText placeholder="Placeholder" />
		</>
	);
}
