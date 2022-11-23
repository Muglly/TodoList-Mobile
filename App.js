import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Header } from './src/components/Header';
import Task from './src/components/Task';
import ModalTask from './src/components/ModalTask';

import { TaskContextState } from './src/contexts/TaskContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: Roboto_400Regular,
    Medium: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function createTask() {
    setModalVisible(!modalVisible);
    alert('funcionou');
  }

  return (
    <View style={styles.container}>
      <Header />
      <TaskContextState>
        <Task />
        <ModalTask createTask={() => createTask()} />
      </TaskContextState>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
