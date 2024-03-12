
import React, { useEffect, useState } from 'react';
import './PatientList.css';

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/patients/search?searchterm=null', {
          headers: {
            'Authorization': 'Bearer Gng8FwweRmNZg4TCg0MshfkHiDku',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch patients');
        }
        const data = await response.json();
        setPatients(data.patients);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patients(Get list of patients - (optional) visible to a practitioner)</h2>
      <table className="patient-table">
        <thead>
          <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Patient Id</th>
          <th>Dob</th>
          <th>PhoneNo</th>
          <th>State</th>
          <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient: any) => (
            <tr key={patient.patientid}>
              <td>{patient.firstname}</td>
            <td>{patient.lastname}</td>
            <td>{patient.patientid}</td>
            <td>{patient.dob}</td>
            <td>{patient.homephone}</td>
            <td>{patient.state}</td>
            <td>{patient.sex}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
