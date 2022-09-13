import {FlatList, ListRenderItemInfo} from "react-native";
import {TodoItem} from "./TodoItem";
import {useEffect, useState} from "react";
import axios from "axios";

export const TodoList = () => {
  const [todos, setTodos] = useState<TTodoItem[]>([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?userId=1').then(({data}) => {
      setTodos(data)
    })
  }, [])

  const deleteItem = (id: number) => () => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const renderItem = ({item}: ListRenderItemInfo<TTodoItem>) => <TodoItem item={item}
                                                                          onPressCross={deleteItem(item.id)}/>

  return <FlatList data={todos}
                   renderItem={renderItem}/>
};

