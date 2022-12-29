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

  const [list,setList] = useState(contacts.sort(compareNames));
  const [showForm, setShowForm] = useState(false);
  const toggleForm = (()=>{
    setShowForm(prevState => !prevState)
  })


  const addContact = (name, phone) => {
    const correctPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 9);
    if(name != "" && phone != "")
    {
        setShowForm((prevState)=>!prevState)
        setList([...list, {
            name: name,
            phone: correctPhone,
        }].sort(compareNames));
    }
  }


  if (showForm)
  {
    return (
      <AddContactForm addContact={addContact} setShowForm={setShowForm}></AddContactForm>
    )
  }
  else{
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Button title='toggle contacts' onPress={toggleContacts} />
        </View>
        <View style={styles.button}>
          <Button title="Add contact" onPress={toggleForm} />
        </View>

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
  },
  page:
  {
    flex: 1,
    justifyContent: "center",
    padding: 20
  }
});
