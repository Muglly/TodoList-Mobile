import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { Header } from '../components/Header';
import Task from '../components/Task';
import ModalTask from '../components/ModalTask';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    alert('Saved successfully');
    console.log(todo);
    setTodos([...todos, todo]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {todos.map((todo) => (
          <Task todo={todo} />
        ))}
      </ScrollView>
      <ModalTask todoHandler={todoHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
