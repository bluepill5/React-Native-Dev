import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList} from 'react-native';
import { TextInput, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';

import ModalItem from './components/Modal';

import styles from './styles';
import AddItem from './components/AddItem';

export default function App() {
  const [ counter, setCounter ] = useState(0);
  const [ listItem, setListItem ] = useState([]);
  const [ itemSelected, setItemSelected ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);

  // Settter functions
  const addItem = (textItem) => {
    if (textItem !== "") {
      setListItem(currentItems => [
        ...currentItems,
        {id: counter, value: textItem}
      ]);
      // setTextItem('');
      setCounter(counter + 1);
    }
  }

  const onHandlerComplete = id => {
    console.log('Complete item');
    // TODO-DO
    // setListItem(currentItems => currentItems.map(item => {item.value = "hi"}));
    // setItemSelected({});
    setListItem(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerDelete = id => {
    console.log('Deleting item');
    setListItem(currentItems => currentItems.filter(item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerModal = id => {
    setItemSelected(listItem.filter(item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  }

  const closeModal = () => {
    setModalVisible(!modalVisible);
  }

  const renderItem = data => 
    <Text 
      style={styles.listItem} 
      onPress={onHandlerModal.bind(this, data.item.id)}> {data.item.id + 1}) { data.item.value } (pendiente)
    </Text>

  return (
    <View style={styles.container}>
      <AddItem onAddItem={ addItem } />

      <View style={styles.itemsStyle}>
        <FlatList 
          data={listItem}
          renderItem={renderItem}
          keyExtractor={ item => item.id }
        />
      </View>

      <ModalItem visible={modalVisible} onComplete={onHandlerComplete} onDelete={onHandlerDelete} onCancel={closeModal} item={itemSelected} />

    </View>


      
  );
}

// function Texto(props) {
//   return <Text style={styles.listItem} onPress={onHandlerModal.bind(this, props.id)}> {props.id + 1}) { props.value }</Text>
// }


