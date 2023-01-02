import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';
import {Constants} from 'expo';

import contacts from './contacts';
import Contact from './Contact';
import { compareNames } from './contacts';
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'




export default function App() {
  const [list,setList] = useState(contacts.sort(compareNames));



  const addContact = (name, phone, navigation) => {
    const correctPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 9);
    if(name != "" && phone != "")
    {
        setList([...list, {
            name: name,
            phone: correctPhone,
        }].sort(compareNames));
    }
  }

  const HomeScreen = ({navigation})=>{
    return(
    <View style={styles.page}>
      <View style={styles.button}>
        <Button title='toggle contacts' onPress={()=>{
          navigation.navigate('CONTACTS')
        }} />
      </View>
      <View style={styles.button}>
        <Button title="Add contact" onPress={()=>{
          navigation.navigate('ADD CONTACT')
        }} />
      </View>
    </View>
    )
  }

  const ContactScreen = ()=>{
    return(
      <ContactsList data={list}/>
    )
  }

  const FormScreen = ({navigation})=>{
    return(
      <AddContactForm addContact={addContact} navigation={navigation}></AddContactForm>
    )

  }
  
  const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HOME' component={HomeScreen} />
          <Stack.Screen name="CONTACTS" component={ContactScreen} />
          <Stack.Screen name="ADD CONTACT" component={FormScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  
    );
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
