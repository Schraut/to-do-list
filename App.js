import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, AsyncStorage } from 'react-native';
// Redux Provider
import { Provider } from 'react-redux';
// Redux Store
import { configureStore } from './redux/store';
// Components
import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const loadToDos = async () => {
    const toDoData = await AsyncStorage.getItem('@ToDoListStore:ToDos');
    if (toDoData) {
      const toDos = JSON.parse(toDoData);
      setToDos(toDos);
    }
  };

  // Load toDos here
  useEffect(() => {
    if (toDos.length) return;
    loadToDos();
  }, []);

  // Save toDos
  useEffect(() => {
    AsyncStorage.setItem('@ToDoListStore:ToDos', JSON.stringify(toDos));
  }, [toDos]);

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
    <Provider store={configureStore()}>
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
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
