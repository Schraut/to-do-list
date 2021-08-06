import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addToDo = (toDoTitle) => {
    setToDos((currentToDos) => [
      ...currentToDos,
      { id: Math.random().toString(), value: toDoTitle },
    ]);
    setIsAddMode(false);
  };

  const deleteToDo = (goalId) => {
    setToDos((currentToDos) => {
      return currentToDos.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelTodo = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a task" onPress={() => setIsAddMode(true)} />
      <ToDoInput
        visible={isAddMode}
        onAddToDo={addToDo}
        onCancel={cancelTodo}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={toDos}
        renderItem={(itemData) => (
          <ToDoItem
            id={itemData.item.id}
            onDelete={deleteToDo}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
