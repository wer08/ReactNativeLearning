import { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
const Contact = (props) => {

    const [showed, setShowed] = useState(false);
    const styles = StyleSheet.create({
        contact: {
            padding: 10,
            borderStyle: 'solid',
            borderTopWidth: 1

        }
    })
    return ( 
    <View style={styles.contact}>
        <TouchableOpacity onPress={()=>setShowed(!showed)}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
        {
            showed &&
            <Text>{props.phone}</Text>
        }

    </View>
     );
}
 
export default Contact;