import React, { useEffect, useState } from 'react';

const PatientInformation: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/1/fhir/dstu2/Patient?identifier=null&birthdate=03%2F02%2F1997&name=F&given=null&family=child&_id=1&THIRDPARTYUSERNAME=Gurantor&PATIENTFACINGCALL=true', {
          headers: {
            'Authorization': 'Bearer mXH5LEmK7ackItDhuhYaJlLvtJao',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch patient information');
        }
        const data = await response.json();
        setPatients(data.entry.map((entry: any) => entry.resource)); // Assuming data is an object with an 'entry' array containing patient resources
      } catch (error) {
        console.error('Error fetching patient information:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient Information</h2>
      <ul>
        {patients.map((patient: any, index) => (
          <li key={index}>
            <strong>Name:</strong> {patient.name[0].family}, {patient.name[0].given.join(' ')}<br />
            <strong>Birthdate:</strong> {patient.birthDate}<br />
            {/* Add more patient information fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientInformation;
