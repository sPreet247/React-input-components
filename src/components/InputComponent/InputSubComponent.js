import { HelperText, Inputs, Label, Item, ItemInner } from './InputElements';

const InputSubComponent = ({
	helperText,
	label,
	focused,
	hovered,
	error,
	disabled,
	size,
	fullWidth,
	multiline,
}) => {
	return (
		<>
			<Item>
				<ItemInner>
					<HelperText>&lt;Input {helperText} /&gt;</HelperText>
				</ItemInner>
				<Label hovered={hovered} focused={focused} error={error}>
					{label}
				</Label>

				<Inputs
					placeholder="Placeholder"
					error={error}
					hovered={hovered}
					focused={focused}
					disabled={disabled}
					size={size}
					fullWidth={fullWidth}
					multiline={multiline}
				/>
			</Item>
		</>
	);
};

export default InputSubComponent;
