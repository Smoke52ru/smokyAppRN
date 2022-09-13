import {TouchableOpacity, StyleSheet, Text, Dimensions} from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

type TButton = {
  onPress: () => void
  text: string
  size?: 'double'
  theme?: 'secondary' | 'accent'
}

const Button = ({onPress, text, size, theme}: TButton) => {
  const buttonStyles: any[] = [styles.button];
  const textStyles: any[] = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}> {text} </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25
  },
  textSecondary: {
    color: "#060606"
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5
  },
  buttonDouble: {
    width: buttonWidth * 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6"
  },
  buttonAccent: {
    backgroundColor: "#f09a36"
  }
});

export default Button;