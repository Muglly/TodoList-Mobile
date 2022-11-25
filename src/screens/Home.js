import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../components/Header';
import Task from '../components/Task';
import ModalTask from '../components/ModalTask';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    alert('Saved successfully!');
    setTodos([...todos, todo]);

    (async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify([...todos, todo]));
      } catch (error) {
        console.log('LocalStorage Error addTask ', error);
      }
    })();
  };

  const deleteTask = (id) => {
    alert('successfully deleted!');

    const filterTask = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(filterTask);

    (async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(filterTask));
      } catch (error) {
        console.log('LocalStorage Error deleteTask ', error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const savedTasks = await AsyncStorage.getItem('todos');
        if (savedTasks == null) {
          setTodos([]);
        } else {
          setTodos(JSON.parse(savedTasks));
        }
      } catch (error) {
        console.log('LocalStorege error ', error);
      }
    })();
  }, []);

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
