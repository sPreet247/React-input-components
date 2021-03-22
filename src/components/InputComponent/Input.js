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

					<InputSubComponent label="Label" helperText="error" error />

					<InputSubComponent label="Label" helperText="disabled" disabled />

					<InputSubComponent
						label="Label"
						helperText='helperText = "Some interesting text"'
						error
					/>
					<IconComponent>
						<InputSubComponent
							label="Label"
							helperText="startIcon"
							icon="startIcon"
						/>
						<InputSubComponent label="Label" helperText="endIcon" />
					</IconComponent>
					<InputSubComponent label="Label" helperText='value = "text"' />
					<SizeComponent>
						<InputSubComponent
							label="Label"
							helperText='size = "sm"'
							size="sm"
						/>

						<InputSubComponent label="Label" helperText='size = "md"' />
					</SizeComponent>

					<InputSubComponent label="Label" helperText="fullWidth" size="fl" />

					<InputSubComponent
						label="Label"
						helperText='multiline row = "4"'
						type="textarea"
					/>
				</Wrapper>
			</Container>
			<footer>created by Sukhpreet Singh - devChallenges.io</footer>
		</>
	);
}

export default Input;
