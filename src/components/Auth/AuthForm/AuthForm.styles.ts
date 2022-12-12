import { DynamicStyleSheet } from "../../../styles/Dynamic.StyleSheet";

export const styles = DynamicStyleSheet.create((props) => ({
  container: {
    marginVertical: 20,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    backgroundColor: props.backgroundColors.primary100,
    // elevation: 2,
    // shadowColor: 'black',
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.35,
    // shadowRadius: 4,
  },
  buttons: {
    marginTop: 12,
  },
}))