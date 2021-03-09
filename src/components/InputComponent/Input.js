import { Heading, Inputs, Container, Label, Title } from './InputElements';

export default function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<Container>
				<Title>{`<Input />`}</Title>
				<Label>Label</Label>
				<Inputs Input placeholder="Placeholder" />
			</Container>
		</>
	);
}
