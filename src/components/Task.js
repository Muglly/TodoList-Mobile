import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Task() {
  const [isTask, setIsTask] = useState([
    {
      id: 1,
      todo: 'tesk 1',
    },
    {
      id: 2,
      todo: 'tesk 2',
    },
  ]);

  return (
    <ScrollView>
      {isTask.map((val) => {
        return (
          <View style={styles.tasks}>
            <Text>{val.todo}</Text>
            <View>
              <TouchableOpacity>
                <Feather name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
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
