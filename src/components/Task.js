import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Task({ todo }) {
  function DeleteTask() {
    alert('tarefa com id' + ' foi delatado');

    // const newTask = isTask.filter((val) => {
    //   return val.id != id;
    // });
    // setIsTask(newTask);
  }

  return (
    <View style={styles.tasks}>
      <Text>{todo.text}</Text>
      <View>
        <TouchableOpacity onPress={() => DeleteTask()}>
          <Feather name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tasks: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 5,
  },
});
