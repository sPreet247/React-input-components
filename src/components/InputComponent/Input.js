import { Heading, InputHeading, Inputs, Label } from './InputElements';

export default function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<InputHeading>
				<code>
					'<Input />'
				</code>
			</InputHeading>
			<Label>Label</Label>
			<Inputs inputs placeholder="Placeholder" />
		</>
	);
}
