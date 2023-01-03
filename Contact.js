import { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
const Contact = ({name,phone,navigation,email, image}) => {

    const styles = StyleSheet.create({
        contact: {
            padding: 10,
        }
    })
    const showDetails = (navigation, name, phone, email, image)=> {
        navigation.navigate('Contact Details',{
            name: name,
            phone: phone,
            email: email,
            image: image
        })
    }
    return ( 
    <TouchableOpacity onPress={()=>showDetails(navigation, name, phone, email, image)}>
        <View style={styles.contact}>
            <Text>{name}</Text>
            <Text>{phone}</Text>
        </View>
    </TouchableOpacity>

     );
}
 
export default Contact;