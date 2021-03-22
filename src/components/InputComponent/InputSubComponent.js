import { HelperText, Inputs, Label, Item, ItemInner } from './InputElements';

const InputSubComponent = ({
	helperText,
	label,
	focus,
	hover,
	error,
	disabled,
	size,

	type,
}) => {
	return (
		<>
			<Item>
				<ItemInner>
					<HelperText>&lt;Input {helperText} /&gt;</HelperText>
				</ItemInner>
				<Label hover={hover} focus={focus} error={error}>
					{label}
				</Label>

				{type === 'textarea' ? (
					<textarea
						rows="4"
						placeholder="Placeholder"
						hover={hover}
						focus={focus}
					/>
				) : (
					<Inputs
						placeholder="Placeholder"
						error={error}
						hover={hover}
						focus={focus}
						disabled={disabled}
						size={size}
						type={type}
					/>
				)}
			</Item>
		</>
	);
};

export default InputSubComponent;
