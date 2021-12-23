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
      console.log(response);
      if (response.status == 200) {
        setUploadSuccess("File Uploaded Successfully")
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
      console.log(response2);
    });
    console.log("mobilenoooo2", selectedData)


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
    });
    console.log("mobilenoooo2", selectedMobile)
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
        <h1>Choose Patient : </h1>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select the Patient
          </Dropdown.Toggle>
          <Dropdown.Menu>
      {fetchedData.map(item=>(  
          <Dropdown.Item href="#/action-1">{item["firstname"]}</Dropdown.Item>
          ))}
          </Dropdown.Menu>
        </Dropdown>
        <br/>
        <br/> */}
        {/* <form onSubmit={handleSubmit}>
        <select name="firstname" onChange={handleChange}>
        {fetchedData.map(item=>(  
          <option value={item["mobile"]}>{item["firstname"]}</option>
          ))}
        </select>
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
		  </div>
        </form> */}

        <section className="container qrcontainer">
          <div className="columns features">
            <form onSubmit={handleSubmit} width="100px">
              <select name="firstname" onChange={handleChange}>
                {fetchedData.map(item => (
                  <option value={item["mobile"]}>{item["firstname"]}</option>
                ))}
              </select>
              <div>
                <input type="file" name="file" onChange={changeHandler} />
                {isSelected ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )}
              </div>
            </form>
            <p>{uploadSuccess}</p>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-content">
                  <div className="content">

                    <center><img src="fasta.jpeg" alt="test-result" width="300"></img></center>
                    <center className="qrcontainer"><button type="submit" value="Submit" onClick={handleSubmission}>Upload Fasta File</button></center>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-shady">
                <div className="card-content">
                  <div className="content">
                    <center><img src="report.png" alt="test-report" width="400"></img></center>
                    <center className="qrcontainer"><button ype="submit" value="Submit" onClick={handleSubmission2}>Generate Report</button></center>
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