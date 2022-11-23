import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, Pressable } from 'react-native';

import { TaskContext } from '../contexts/TaskContext';

export default function ModalTask() {
  const [modalVisible, setModalVisible] = useState(false);

  const { setIsNewTask } = useContext(TaskContext);

  function saveTask() {
    setModalVisible(!modalVisible);
    alert('Saved successfully');
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput autoFocus={true} placeholder="enter your task" onChangeText={setIsNewTask} />
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => saveTask()}>
              <Text style={styles.textStyle}>Save Task</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Create Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 150,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#EBE96E',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Bold',
  },
});
