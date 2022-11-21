import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Task() {
  return (
    <ScrollView>
      {/* tasks */}
      <View style={styles.tasks}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, erat sit amet
          pellentesque ornare, velit ligula eleifend nunc, eget interdum dolor nibh viverra nulla.
          Fusce nec felis at nulla finibus egestas vitae id orci. Suspendisse molestie lectus vel
          nisi luctus, in malesuada justo auctor. Vivamus posuere condimentum varius.
        </Text>
        <View>
          <TouchableOpacity>
            <Feather name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      {/* tasks */}
      <View style={styles.tasks}>
        <Text>Uma tarefa de exemplo</Text>
        <View>
          <TouchableOpacity>
            <Feather name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
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
