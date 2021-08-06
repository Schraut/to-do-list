import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

const ToDoItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listItem}>{props.title}</Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  deleteButton: {
    width: '20%',
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default ToDoItem;

// old code
{
  /* <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
  <View style={styles.listItem}>
    <Text>{props.title}</Text>
  </View>
</TouchableOpacity>; */
}
