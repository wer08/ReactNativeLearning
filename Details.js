import { Image, StyleSheet, Text, View } from "react-native";
import { Linking } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Details = ({route}) => {
    const styles = StyleSheet.create({
        section:{

            borderBottomWidth: 0.2,
            borderBottomColor: 'black',
            fontSize: 18,
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 15,
            marginRight: 15,
            
        },
        picture:{
            width: 55,
            height: 50,
            margin: 15,
            borderRadius: 50
        },
        icons:{
            marginRight: 25
        },


    })
    return ( 
        <View>
            <Image style ={styles.picture} source={{uri: route.params.image}} />
            <Text style={styles.section} onPress={()=>{
                Linking.openURL(`tel:${route.params.phone}`)
            }}><View style={styles.icons}><Ionicons name="call-outline" size={20}/></View><Text style={styles.info}>{route.params.phone}</Text></Text>
            <Text style={styles.section} onPress={()=>{
                Linking.openURL(`mailto:${route.params.email}`)
            }}><View style={styles.icons}><Ionicons name="mail-outline" size={20}/></View>{route.params.email}</Text>
        </View>
     );
}
 
export default Details;