import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Todo() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = () => {
    setItems([...items, text]);
    setText('');
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setEditText(items[index]);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setEditIndex(null);
    setEditText('');
    setModalVisible(false);
  };

  const saveEditedItem = () => {
    const newItems = [...items];
    newItems[editIndex] = editText;
    setItems(newItems);
    closeEditModal();
  };
  
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={styles.backButtonText}>{'Back'}</Text>
    </TouchableOpacity>
    <Text style={styles.baseText}>Todo App</Text>
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={(text) => setText(text)}
      placeholder='Type here to add a new Item...'
      maxLength={15}
    />
    <View style={styles.buttonContainer}>
      <Button
        title="Add Item"
        color="#f5222d"
        onPress={addItem}
      />
    </View>
    {items.map((item, index) => (
      <View key={index} style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
        <TouchableOpacity onPress={() => openEditModal(index)}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(index)}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    ))}
    <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Edit Item</Text>
        <TextInput
          style={styles.modalInput}
          value={editText}
          onChangeText={setEditText}
          maxLength={15}
        />
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={closeEditModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={saveEditedItem}>
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff7875',
    top: -30

  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5222d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#5c0011',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f5222d',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  editButtonText: {
    color: '#f5222d',
    marginRight: 10,
    
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#a8071a'
  },
  modalInput: {
    width: '80%',
    height: 40,
    borderColor: '#5c0011',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  modalButton: {
    backgroundColor: '#a8071a',
    padding: 5,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
