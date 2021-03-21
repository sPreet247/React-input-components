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
					<InputSubComponent
						label="Label"
						helperText=""
						placeholder="Placeholder"
					/>

					<InputSubComponent
						label="Label"
						helperText="error"
						placeholder="Placeholder"
					/>

					<InputSubComponent
						label="Label"
						helperText="disabled"
						placeholder="Placeholder"
					/>

					<InputSubComponent
						label="Label"
						helperText='helperText = "Some interesting text"'
						placeholder="Placeholder"
					/>
					<IconComponent>
						<InputSubComponent
							label="Label"
							helperText="startIcon"
							placeholder="Placeholder"
						/>

						<InputSubComponent
							label="Label"
							helperText="endIcon"
							placeholder="Placeholder"
						/>
					</IconComponent>
					<InputSubComponent
						label="Label"
						helperText='value = "text"'
						placeholder="Placeholder"
					/>
					<SizeComponent>
						<InputSubComponent
							label="Label"
							helperText='size = "sm"'
							placeholder="Placeholder"
						/>

						<InputSubComponent
							label="Label"
							helperText='size = "md"'
							placeholder="Placeholder"
						/>
					</SizeComponent>

					<InputSubComponent
						label="Label"
						helperText="fullWidth"
						placeholder="Placeholder"
					/>

					<InputSubComponent
						label="Label"
						helperText='multiline row = "4"'
						placeholder="Placeholder"
					/>
				</Wrapper>
			</Container>
		</>
	);
}

export default Input;
