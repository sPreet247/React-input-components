import {
	Heading,
	Wrapper,
	Container,
	IconComponent,
	SizeComponent,
	Icons,
} from './InputElements';
import InputSubComponent from './InputSubComponent';
import { MdCall, MdLock } from 'react-icons/md';
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
						<div>
							<InputSubComponent
								label="Label"
								helperText="startIcon"
								startIcon={
									<Icons>
										<MdCall />
									</Icons>
								}
							/>
						</div>
						<InputSubComponent
							label="Label"
							helperText="endIcon"
							endIcon="endIcon"
						/>
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
