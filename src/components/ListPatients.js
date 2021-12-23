import React from 'react'
import {useEffect, useState} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';



export default function ListPatients() {
    //console.log(data)
    const itemRows = [];
    const [fetchedData, setFetchedData] = useState([]);
    // const [fetchedEmail, setFetchedEmail] = useState([]);
    // const [fetchedVerified, setFetchedVerified] = useState([]);
    // const [fetchedUsername, setFetchedUsername] = useState([]);
    useEffect(() => {
      const getData = async() => {
        const data = await axios.get("https://145gkmq34e.execute-api.us-east-1.amazonaws.com/prod/getallpatients").then((response) => {
          console.log(response.data)
          var sol = response.data
          var firstname = []
          var mobile = []
          var lastname = []
          var appointmentId = []
          var adharFrontImagePath = []
          var adharBackImagePath = []
          var time = []
          var date = []
          for (let i=0;i<sol.length;i++){
            //console.log(sol[i])
            lastname.push(sol[i]["lastname"])
            firstname.push(sol[i]["firstname"])
            mobile.push(sol[i]["mobile"])
            appointmentId.push(sol[i]["appointmentId"])
            adharFrontImagePath.push(sol[i]["adharFrontImagePath"])
            adharBackImagePath.push(sol[i]["adharBackImagePath"])
            time.push(sol[i]["time"])
            date.push(sol[i]["date"])
          }
          setFetchedData(sol);
          for (let i=0;i<firstname.length;i++) {
            const row = (
              <tr key={firstname[i]}>
                <td key={1}>{firstname[i]}</td>
                <td key={2}>{lastname[i]}</td>
                <td key={3}>{mobile[i]}</td>
                <td key={3}>{appointmentId[i]}</td>
                <td key={4}>{adharFrontImagePath[i]}</td>
                <td key={5}>{adharBackImagePath[i]}</td>
                <td key={6}>{time}</td>
                <td key={7}>{date}</td>
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
      <h1>List of Patients : </h1>
     
    <Table class="table table-dark" responsive striped bordered hover size="sm">
     <thead>
       <tr>
         <th>Firstname</th>
         <th>Lastname</th>
         <th>Mobile No.</th>
         <th>Appointment-Id</th>
         <th>ID-Front</th>
         <th>ID-Back</th>
         <th>Appointment-Time</th>
         <th>Appointment-Date</th>
       </tr>
     </thead>
     <tbody>
       {fetchedData.map(item=>(
         <tr key={item.id}>
           <td key={1}>{item["firstname"]}</td>
           <td key={2}>{item["lastname"]}</td>
           <td key={3}>{item["mobile"]}</td>
           <td key={4}>{item["appointmentId"]}</td>
           <td key={5}><img src={item["adharFrontImagePath"]} width="80px" height="50px"/></td>
           <td key={6}><img src={item["adharBackImagePath"]} width="80px" height="50px"/></td>
           <td key={7}>{item["time"]}</td>
           <td key={8}>{item["date"]}</td>
         </tr>
       ))}
     </tbody>
   </Table>
   </Container>
      </div>
      )
}