import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

type TTodoItemProps = {
  item: TTodoItem
  onPressCross?: () => any
}

export const TodoItem = ({item, onPressCross}: TTodoItemProps) => {

  return (
    <View style={styles.row}>
      <Text style={styles.text}>{item.title}</Text>
      <TouchableOpacity style={styles.button} onPress={onPressCross}>
        <Text>x</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  text: {
    flex: 1,
    padding: 20,
  },
  button: {
    flex: 0,
    width: 50,
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: "center"
  }
});