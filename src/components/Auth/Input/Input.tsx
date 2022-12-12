import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { styles } from "./Input.styles";

type Props = {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secure?: boolean;
  onUpdateValue: (data: string) => void;
  value: string;
  isInvalid: boolean;
};

export const Input = (props: Props) => {
  const { label, keyboardType, secure, onUpdateValue, value, isInvalid } =
    props;
  return (
    <View style={styles.container}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};
