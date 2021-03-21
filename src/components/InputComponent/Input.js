import {
	Heading,
	Wrapper,
	Container,
	IconComponent,
	SizeComponent,
} from './InputElements';
import InputSubComponent from './InputSubComponent';

function Input() {
	return (
		<>
			<Heading>Inputs</Heading>
			<Container>
				<Wrapper>
					<InputSubComponent label="Label" helperText="" />

					<InputSubComponent label="Label" helperText="error" />

					<InputSubComponent label="Label" helperText="disabled" />

					<InputSubComponent
						label="Label"
						helperText='helperText = "Some interesting text"'
					/>
					<IconComponent>
						<InputSubComponent label="Label" helperText="startIcon" />

						<InputSubComponent label="Label" helperText="endIcon" />
					</IconComponent>
					<InputSubComponent label="Label" helperText='value = "text"' />
					<SizeComponent>
						<InputSubComponent label="Label" helperText='size = "sm"' />

						<InputSubComponent label="Label" helperText='size = "md"' />
					</SizeComponent>

					<InputSubComponent label="Label" helperText="fullWidth" />

					<InputSubComponent label="Label" helperText='multiline row = "4"' />
				</Wrapper>
			</Container>
		</>
	);
}

export default Input;
