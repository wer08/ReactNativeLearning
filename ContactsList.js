import { ListViewBase, SectionList, StyleSheet, Text } from "react-native";
import Contact from "./Contact";


const ContactsList = ({data,navigation}) => {
    const styles = StyleSheet.create({
        header:{
            borderBottomColor: 'black',
            borderBottomWidth: 1
        }
    })
    const getSections = (data) => {
        if (data.length === 0)
        {
            return [];
        }
        return Object.values(
            data.reduce((acc,contact)=>{
                let firstLetter = contact.name[0];
                if(!acc[firstLetter]){
                    acc[firstLetter] = {title: firstLetter, data: [contact]}
                }
                else{
                    acc[firstLetter].data.push(contact);
                }
                return acc;
            },{})
        )
    } 
    const renderSectionHeader = ({section}) => <Text style={styles.header}>{section.title}</Text>
    return ( 
        
        <SectionList
        renderItem ={obj => <Contact name={obj.item.name} phone={obj.item.phone} navigation={navigation} email={obj.item.email} image={obj.item.picture.medium}/>}
        renderSectionHeader = {renderSectionHeader}
        sections={getSections(data)}
        />
     );
}
 
export default ContactsList;