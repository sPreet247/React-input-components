import { HelperText, Inputs, Label, Item, ItemInner } from './InputElements';

const InputSubComponent = ({ helperText, label }) => {
	return (
		<>
			<Item>
				<ItemInner>
					<HelperText>&lt;Input {helperText} /&gt;</HelperText>
				</ItemInner>
				<Label>{label}</Label>

				<Inputs placeholder="Placeholder" />
			</Item>
		</>
	);
};

export default InputSubComponent;
