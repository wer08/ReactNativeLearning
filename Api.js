import { compareNames } from "./contacts.js"

export const Api = async ()=>{
  const promise = await fetch(`https://randomuser.me/api/?results=50&nat=us`);
  const response = await promise.json();
  const results = response.results;
  let contacts = results.map((el) => {return (
    {... el,
      name: `${el.name.first} ${el.name.last}`,
    }
    )})
  contacts = contacts.sort(compareNames);
  return contacts;
}



