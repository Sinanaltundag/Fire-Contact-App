import firebase from "./firebase";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toast";


let updateContact;


export const AddUser = (info)=> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": info.username,
      "phoneNumber": info.phoneNumber,
      "gender": info.gender,
    });
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8001/api/contact/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        updateContact();
      })
      .catch(error => console.log('error', error));


//     const db = getDatabase();
// const userRef = ref(db, "baglanti")
// const newUserRef = push(userRef)
// set((newUserRef),info)
}

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();
    
    const getContacts=()=>{
        fetch("http://127.0.0.1:8001/api/contact/")
        .then(res=>res.json())
        .then(data=>{
            setContactList(data);
            console.log(data);
        }
        )
        .catch(err=>{
            console.log(err);
        }
        )
    }
    updateContact = getContacts;
    useEffect(() => {
        setIsLoading(true)
        
        getContacts();
        setIsLoading(false)
        // const db = getDatabase();
        // const userRef=ref(db,"baglanti");

        // onValue(userRef, (snapshot) => {
        //     const data = snapshot.val();
        //     const baglantiArray=[];

        //     for(let id in data){
        //         baglantiArray.push({id,...data[id]})
        //     }          
        //     setContactList(baglantiArray);
        //     setIsLoading(false);
        // });
    },[])
    return {isLoading,contactList}
}

export const DeleteUser = (id)=>{
    fetch("http://127.0.0.1:8001/api/contact/"+id+"/", {
        method: "DELETE",
})
  .then(response => response.text())
  .then(result => {console.log(result)
    updateContact();
})
  .catch(error => console.log('error', error));
    // const db = getDatabase();
    //     // const userRef=ref(db,"baglanti");
    //     remove(ref(db,"baglanti/"+id))
    //     Toastify("Record Deleted")
}

export const EditUser = (info)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      ...info
    });
    
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8001/api/contact/"+info.id+"/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        updateContact();
      })
      .catch(error => console.log('error', error));
//     const db = getDatabase();
// const updates={};
// updates["baglanti/"+info.id]=info;
// return update(ref(db),updates);
}

















/* export const AddUser = (info)=> {
    const db = getDatabase();
const userRef = ref(db, "baglanti")
const newUserRef = push(userRef)
set((newUserRef),{
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender
})
} */