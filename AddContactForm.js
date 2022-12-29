import { Button, StyleSheet, TextInput, View } from "react-native";
import PropTypes from 'prop-types'
import { useDebugValue, useEffect, useState } from "react";

const AddContactForm = ({addContact, setShowForm}) => {

    const styles = StyleSheet.create({
        input: {
            padding: 5,
            borderColor: 'black',
            borderWidth: 1,
            margin: 5,
        },
        page:
        {
            justifyContent: 'center',
            flex: 1
        }
    })


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [disabled, setDisabled] = useState(true);
    const pressHandler = ()=>addContact(name,phone);
    const cancelHandler = () => setShowForm(false);

    const handleName = name =>{
        if(name.length > 0)
        {
            setName(name)
        }

    }
    
    const handlePhone = phone =>{
        if(+phone >= 0 && phone.length <= 9 )
        {
            setPhone(phone);
        }

    }
    useEffect(()=>{
        if(phone.length === 9 && name.length > 0)
        {
            setDisabled(false)
        }
        else
        {
            setDisabled(true)
        }

    },[phone,name])

    return ( 
        <View style={styles.page}>
            <TextInput style = {styles.input} value={name} onChangeText={handleName} autoFocus={true} clearButtonMode="always" placeholder="Name"/>
            <TextInput style = {styles.input} value={phone} onChangeText={handlePhone} clearButtonMode="always" placeholder="phone" keyboardType="numeric"/>
            <Button title="Add" onPress={pressHandler} disabled={disabled}/>
            <Button title="Cancel" onPress={cancelHandler} />
        </View>
     );
}
 
export default AddContactForm;