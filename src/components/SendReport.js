import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';



export default function SendReports() {
  //console.log(data)
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedMobile, setSelectedMobile] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [isSelected, setIsFilePicked] = useState(false);
  const [upload2Success, setUpload2Success] = useState(null);



  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://145gkmq34e.execute-api.us-east-1.amazonaws.com/prod/getallpatients").then((response) => {
        console.log(response.data)
        var sol = response.data
        var firstname = []
        var lastname = []
        for (let i = 0; i < sol.length; i++) {
          //console.log(sol[i])
          lastname.push(sol[i]["lastname"])
          firstname.push(sol[i]["firstname"])
        }
        setFetchedData(sol);
      }
      );
    }


    getData();
  }, []);



  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmit = (e) => {
    //console.log(e.target.value);
  }
  const handleChange = (e) => {
    //console.log(e.target.value);
    var dict = { "phone": e.target.value }
    setSelectedData(dict)
    var mobile = { "mobile": e.target.value }
    setSelectedMobile(mobile)
    console.log("mobile---", selectedMobile)
  }
  const handleSubmission = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    console.log(selectedFile)
    //console.log(selectedFile.name)
    //const fd = new FormData();

    //fd.append('image', selectedFile, selectedFile.name);
    console.log("1111", selectedFile)
    const fd = selectedFile
    //   const headers = { 
    //     // "Access-Control-Allow-Origin":"*",
    //     // "Access-Control-Allow-Headers":"*",
    //     // "Access-Control-Allow-Methods":"OPTIONS,PUT"
    //     "Content-Type": "multipart/form-data"
    // };
    const headers2 = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "OPTIONS,PUT,POST"
    };

    var resp = axios.put(`https://ac0fw2o8w7.execute-api.us-east-1.amazonaws.com/prod/upload/sagemakerretrieve/${selectedFile.name}`, fd, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,PUT",
        "x-amz-meta-customLabels": selectedData.phone
      }
    }).then((response) => {
      console.log("parameter", selectedData.phone)
      console.log("res", response);
      var oneSecond = 1000;
      var tenSecond = oneSecond * 10;
      if (response.status == 200) {
        setTimeout(function () {
          setUploadSuccess(<h4>DNA Sequencing Report Generated Successfully</h4>)
        }, tenSecond);

        setUploadSuccess(<div className='loader' id='target'></div>)
      }
    });

    //const ph = new FormData();
    //ph.append('number',selectedData);
    var dict = selectedData
    dict["file"] = selectedFile.name
    setSelectedFile(dict)
    console.log("2222", ph)
    var ph = selectedData
    axios.post(`https://ac0fw2o8w7.execute-api.us-east-1.amazonaws.com/prod/uploadnumber`, ph, { headers: headers2 }).then((response2) => {
      console.log(response2);
    });
    console.log("mobilenoooo", selectedData)

    axios.post(`https://145gkmq34e.execute-api.us-east-1.amazonaws.com/prod/sendreporttowauser`, ph, { headers: headers2 }).then((response2) => {
      console.log("21234567", response2)
      alert("Hello! I am an alert box!!");
    });
  };

  const handleSubmission2 = (e) => {
    e.preventDefault();
    // const headers3 = {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*",
    //   "Access-Control-Allow-Methods": "OPTIONS,PUT"
    // };
    var mobile = selectedMobile
    axios.post(`https://145gkmq34e.execute-api.us-east-1.amazonaws.com/prod/sendreporttowauser`, mobile).then((response2) => {
      console.log("asdfghjklkjhgfdsasdfghjkl", response2);
      alert("Hello! I am an alert box!!");
    });
  };

  // const fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

  //   axios.post(`https://ac0fw2o8w7.execute-api.us-east-1.amazonaws.com/prod/upload/sagemakerretrieve/${selectedFile.name}`,fd).then((response) => {
  //           console.log(response);
  //         });

  // }

  return (

    <div>
      <Container>
        <section className="container qrcontainer">
          <div className="columns features">
            <form onSubmit={handleSubmit} width="100px">
              <h3>Choose Patient : </h3>
              <select name="firstname" onChange={handleChange}>
                {fetchedData.map(item => (
                  <option value={item["mobile"]}>{item["firstname"] + " " + item["lastname"]}</option>
                ))}
              </select>
              <div>
                <input style={{ marginTop: 2 + 'vw' }} type="file" name="file" onChange={changeHandler} />
                {isSelected ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                  </div>
                ) : (
                  <p style={{ marginTop: 2 + 'vw' }}>Select a file to show details</p>
                )}
                {uploadSuccess}
                {upload2Success}
              </div>
            </form>

            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-content">
                  <div className="content">

                    <center><img src="fasta.jpg" alt="test-result" width="300"></img></center>
                    <center className="qrcontainer"><button className="button is-primary" type="submit" value="Submit" onClick={handleSubmission}>Upload Fasta File and Generate Report</button></center>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-content">
                  <div className="content">
                    <center><img src="report.png" alt="test-report" width="400"></img></center>
                    <center className="qrcontainer"><button className="button is-primary" ype="submit" value="Submit" onClick={handleSubmission2}>Send Report on Whatsapp</button></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}