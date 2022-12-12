import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    marginVertical: 8,
  },
  label: {
    color: props.colors.primary400,
    marginBottom: 4,
  },
  labelInvalid: {
    color: props.colors.secondary400,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: props.backgroundColors.primary000,
    borderRadius: 4,
    fontSize: 16,
    color: props.textColors.primary500,
  },
  inputInvalid: {
    backgroundColor: props.colors.secondary600,
    color: props.textColors.primary000,
  },
}))