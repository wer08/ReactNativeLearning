import { Button, StyleSheet, TextInput, View } from "react-native";
import PropTypes from 'prop-types'
import { useEffect, useState } from "react";

const AddContactForm = ({setList, list, setShowForm}) => {

    const styles = StyleSheet.create({
        input: {
            padding: 5,
            borderColor: 'black',
            borderWidth: 1,
            margin: 5,
        }
    })

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const pressHandler = ()=>{
        const newList = [...list];
        if(name != "" && phone != "")
        {
            setShowForm((prevState)=>!prevState)
            setList([...newList, {
                name: name,
                phone: phone,
            }]);

            
        }


    }
    useEffect(()=>{
        setName("");
        setPhone("");
    },[list])
    return ( 
        <View>
            <TextInput style = {styles.input} value={name} onChangeText={setName} autoFocus={true} clearButtonMode="always"/>
            <TextInput style = {styles.input} value={phone} onChangeText={setPhone} clearButtonMode="always"/>
            <Button title="Add" onPress={pressHandler}/>
        </View>
     );
}
 
export default AddContactForm;