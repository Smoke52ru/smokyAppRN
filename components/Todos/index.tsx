import {TodoList} from "./TodoList";
import {StatusBar, StyleSheet, View} from "react-native";

export const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <TodoList/>
      <StatusBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})