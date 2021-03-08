import { Heading, Inputs, Container } from './InputElements';

export default function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<Container>
				<label>Label</label>
				<Inputs placeholder="Placeholder" />
			</Container>
		</>
	);
}
