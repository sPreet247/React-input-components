import { HelperText, Inputs, Label, Item, ItemInner } from './InputElements';

const InputSubComponent = ({
	helperText,
	label,

	...otherProps
}) => {
	return (
		<>
			<Item>
				<ItemInner>
					<HelperText>&lt;Input {helperText} /&gt;</HelperText>
				</ItemInner>
				<Label>{label}</Label>

				<Inputs placeholder={otherProps.placeholder} />
			</Item>
		</>
	);
};

export default InputSubComponent;
