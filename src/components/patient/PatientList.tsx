import React, { useEffect, useState } from 'react';
import './PatientList.css';
import axios from 'axios';
//import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PatientTable: React.FC = () => {
  const [patients, setPatients] = useState([]);
 {/*} const [editedPatient, setEditedPatient] = useState({
    firstname:"",
    lastname:'',
    dob:"",
    mobilephone:"",
    sex:"",
    countrycode:""

  });*/}

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const token = 'Gng8FwweRmNZg4TCg0MshfkHiDku'; 
        const response = await axios.get('https://api.preview.platform.athenahealth.com/v1/195900/patients/enhancedbestmatch?firstname=First&lastname=Name&dob=11%2F11%2F1980', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  {/*const handleEdit = (patient: any) => {
    setEditedPatient(patient);
    // You can open a modal or switch the form to edit mode
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`your-api-endpoint/${id}`, {
        method: 'DELETE',
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  };*/}

  return (
    
   
    /* <TableContainer component={Paper}>
    <Table>
        <TableHead>
          <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Dob</TableCell>
          <TableCell>MobileNo</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
        {patients.map((patient: any, index: number) => (
          <TableRow key={index}>
            <TableCell>{patient.firstname}</TableCell>
            <TableCell>{patient.lastname}</TableCell>
            <TableCell>{patient.dob}</TableCell>
            <TableCell>{patient.mobilephone}</TableCell>
            <TableCell>{patient.sex}</TableCell>
            <TableCell>{patient.countrycode}</TableCell>
            <td> <button >Edit</button>
              <button >Delete</button></td>
              </TableRow>
               ))}
               </TableBody>
      </Table>
    </TableContainer>*/
      
  <div>
    <h2>Patient List(Get list of patients - enhanced best matching search criteria)</h2>
    <table className="patient-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Dob</th>
          <th>MobileNo</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient: any, index: number) => (
          <tr key={index}>
            <td>{patient.firstname}</td>
            <td>{patient.lastname}</td>
            <td>{patient.dob}</td>
            <td>{patient.mobilephone}</td>
            <td>{patient.sex}</td>
            <td>{patient.countrycode}</td>
            <td> <button >Edit</button>
              <button >Delete</button></td>
            </tr>
            // onClick={() => handleEdit(index)}
        ))}
      </tbody>
    </table>
        </div>
  );
};

export default PatientTable;
