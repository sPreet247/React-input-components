import { Heading } from './InputElements';

export default function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<label>
				Label
				<Input placeholder="Placeholder" />
			</label>
		</>
	);
}
