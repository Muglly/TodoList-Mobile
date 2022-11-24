import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { Header } from '../components/Header';
import Task from '../components/Task';
import ModalTask from '../components/ModalTask';

import { TaskContextState } from '../contexts/TaskContext';

export default function Home() {
  const [todos, setTodos] = useState([1, 2]);

  return (
    <View style={styles.container}>
      <Header />
      <TaskContextState>
        <ScrollView>
          {todos.map((todo) => (
            <Task />
          ))}
        </ScrollView>
        <ModalTask />
      </TaskContextState>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
