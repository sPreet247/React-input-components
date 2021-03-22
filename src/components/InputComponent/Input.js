import {
	Heading,
	Wrapper,
	Container,
	IconComponent,
	SizeComponent,
	PhoneIcon,
} from './InputElements';
import InputSubComponent from './InputSubComponent';
import { MdPhone, MdLock } from 'react-icons/md';

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
							helperText="startIcon"></InputSubComponent>
						<MdPhone />
						<InputSubComponent label="Label" helperText="endIcon" />

						<MdLock />
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
						size="ml"
					/>
				</Wrapper>
			</Container>
			<footer>created by Sukhpreet Singh - devChallenges.io</footer>
		</>
	);
}

export default Input;
