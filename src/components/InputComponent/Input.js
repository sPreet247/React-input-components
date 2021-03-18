import { Heading, Wrapper } from './InputElements';
import InputSubComponent from './InputSubComponent';

function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<Wrapper>
				<InputSubComponent
					label="Label"
					helperText="Input"
					placeholder="Placeholder"
				/>

				<InputSubComponent
					label="Label"
					helperText="Input error"
					placeholder="Placeholder"
				/>
			</Wrapper>
		</>
	);
}

export default Input;
