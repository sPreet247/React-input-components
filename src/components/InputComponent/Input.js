import { Heading, Inputs } from './InputElements';

export default function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<label>
				Label
				<Inputs placeholder="Placeholder" />
			</label>
		</>
	);
}
