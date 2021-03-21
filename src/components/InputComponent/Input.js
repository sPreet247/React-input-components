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
					/>
					<IconComponent>
						<InputSubComponent label="Label" helperText="startIcon">
							<PhoneIcon>
								<MdPhone />
							</PhoneIcon>
						</InputSubComponent>

						<InputSubComponent label="Label" helperText="endIcon" />

						<MdLock />
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
