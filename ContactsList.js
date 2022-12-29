import { ListViewBase, SectionList, Text } from "react-native";
import Contact from "./Contact";


const ContactsList = ({data}) => {
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
    const renderSectionHeader = ({section}) => <Text>{section.title}</Text>
    return ( 
        
        <SectionList
        renderItem ={obj => <Contact {...obj.item} />}
        renderSectionHeader = {renderSectionHeader}
        sections={getSections(data)}
        />
     );
}
 
export default ContactsList;