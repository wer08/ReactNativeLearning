import { Image, StyleSheet, Text, View } from "react-native";
import { Linking } from "react-native";

const Details = ({route}) => {
    const styles = StyleSheet.create({
        section:{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            fontSize: 24,
            padding: 4
        },
        picture:{
            width: 55,
            height: 50,
            margin: 15
        }

    })
    return ( 
        <View>
            <Image style ={styles.picture} source={{uri: route.params.image}} />

            <Text style={styles.section}>Name: {route.params.name}</Text>
            <Text style={styles.section} onPress={()=>{
                Linking.openURL(`tel:${route.params.phone}`)
            }}> Phone: {route.params.phone}</Text>
            <Text style={styles.section}>email: {route.params.email}</Text>
        </View>
     );
}
 
export default Details;