const firstNames = ['Wojtek','Milena','Marek','Paweł','Kamil','Adiran','Kuba','Diana','Klaudia','Ola','Aleksandra','Agnieszka','Dagmara','Natalia','Grazyna','Tomek','Mariusz','Waldemar','Zbigniew','Matylda','Genowefa','Katarzyna'];
const lastNames = ['Żółkowski','Nowak','Kowalczyk','Kowalek','Marcynski','Deląf','Zamchowski','Green','Smitch','Jones','Sabak','Lubaszla','Sobotka','Domanski','Philips','Rogers','Stark','Banner','cooper','Marciniak','Drab'];
//generate random number
const rand = (max,min = 0) => Math.floor(Math.random() * (max - min + 1)) + min ;
//generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`
// generate a phone number 
const generatePhoneNumber = () => `${rand(999,100)}-${rand(999,100)}-${rand(999,100)}`;
//generate a person
const createContact = () => ({
    name: generateName(),
    phone: generatePhoneNumber()
});
//compare 2 contacts for alphabetizing
export const compareNames = (contact1, contact2) => ((contact1.name > contact2.name)?1:-1);

//add keys to bnased on index
const addKeys = (val, key) => ({key, ...val});
const NUM_CONTACTS = 50;
//Create an Array of length NUM_CONTACTS and alphatize name
export default Array.from({length: NUM_CONTACTS},createContact).map(addKeys)

