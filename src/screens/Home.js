import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { Header } from '../components/Header';
import Task from '../components/Task';
import ModalTask from '../components/ModalTask';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    alert('Saved successfully');
    console.log(todo);
    setTodos([...todos, todo]);
  };

  const deleteTask = (id) => {
    alert('tarefa com id' + id + ' foi delatado');

    const filterTask = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(filterTask);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {todos.map((todo) => (
          <Task todo={todo} key={todo.id} deleteTask={deleteTask} />
        ))}
      </ScrollView>
      <ModalTask addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
