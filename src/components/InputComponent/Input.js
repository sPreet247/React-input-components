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
		</>
	);
}
