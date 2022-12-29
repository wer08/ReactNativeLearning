import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';
import {Constants} from 'expo';

import contacts from './contacts';
import Contact from './Contact';
import { compareNames } from './contacts';
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';


export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const toggleContacts = () => {
    setShowContacts(prevState => !prevState);
  }

  const [list,setList] = useState(contacts);
  const [showForm, setShowForm] = useState(false);
  const toggleForm = (()=>{
    setShowForm(prevState => !prevState)
  })

  const sort = (list)=>{
    const sortedList = [...list].sort(compareNames)
    setList(sortedList);
  }



  if (showForm)
  {
    return (
      <AddContactForm setList = {setList} list={list} setShowForm={setShowForm}></AddContactForm>
    )
  }
  else{
    return (
      <View>
        <View style={styles.button}>
          <Button title='toggle contacts' onPress={toggleContacts} />
        </View>
        <View style={styles.button}>
          <Button title="Add contact" onPress={toggleForm} />
        </View>

        {showContacts && <View style={styles.button}><Button title='sort' onPress={()=>{
          sort(list);
        }} /></View>}
        {showContacts && <ContactsList data={list}/>}
        
      </View>
  
    );
  }

}

const styles = StyleSheet.create({

  button: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 100,
    marginRight: 100
  }
});
