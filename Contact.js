import { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from "react-native";
const Contact = ({name,phone,navigation,email, image}) => {

    const styles = StyleSheet.create({
        contact: {
            padding: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: 'black',
            marginLeft: 20,
            marginRight: 20
        },
        picture:{
            width: 50,
            height: 50,
            margin: 5,
            borderRadius: 50

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

            <Image style ={styles.picture} source={{uri: image}} />
            <Text>{name}</Text>
        </View>
    </TouchableOpacity>

     );
}
 
export default Contact;