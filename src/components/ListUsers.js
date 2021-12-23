import React from 'react';
import {useEffect, useState} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

export default function ListUsers() {
    //console.log(data)
    const itemRows = [];
    const [fetchedData, setFetchedData] = useState([]);
    // const [fetchedEmail, setFetchedEmail] = useState([]);
    // const [fetchedVerified, setFetchedVerified] = useState([]);
    // const [fetchedUsername, setFetchedUsername] = useState([]);
    useEffect(() => {
      const getData = async() => {
        const data = await axios.get("https://145gkmq34e.execute-api.us-east-1.amazonaws.com/prod/getlabassist").then((response) => {
          var sol = JSON.parse(response.data.body)
          var email = []
          var verified = []
          var username = []
          for (let i=0;i<sol.length;i++){
            //console.log(sol[i])
            username.push(sol[i]["Username"])
            email.push(sol[i]["email"])
            verified.push(sol[i]["email_verified"])
          }
          setFetchedData(sol);
          for (let i=0;i<email.length;i++) {
            const row = (
              <tr key={email[i]}>
                <td key={1}>{email[i]}</td>
                <td key={2}>{username[i]}</td>
                <td key={3}>{verified[i]}</td>
              </tr>
            );
            itemRows.push(row);
          }
        });
      }
      getData();
    }, []);


    return (
    <div>
      <Container>
        
      <h1>List of Lab Assistants : </h1>
      <Table class="table table-dark" responsive striped bordered hover size="sm">
     <thead>
       <tr>
         <th>Username</th>
         <th>Email</th>
         <th>Is Verified?</th>
       </tr>
     </thead>
     <tbody>
       {fetchedData.map(item=>(
         <tr key={item.id}>
           <td key={1}>{item["Username"]}</td>
           <td key={2}>{item["email"]}</td>
           <td key={3}>{item["email_verified"]}</td>
         </tr>
       ))}
     </tbody>
   </Table>
   </Container>
      </div>
      )
}