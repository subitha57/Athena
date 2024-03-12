import React, { useEffect, useState } from 'react';
import './SinglePatient.css'; 
import Sidebar from '../Sidebar';

const fetchData = async () => {
  try {
    const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/patients/12358', {
      headers: {
        Authorization: 'Bearer 1wZ80jJPc8QOV5EC2Jii9QGuQM6G',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching patient details:', error);
    return null;
  }
};

const App: React.FC = () => {
  const [patientDetails, setPatientDetails] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const data = await fetchData();
      setPatientDetails(data);
      setLoading(false);
    };

    fetchPatientDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {patientDetails && <PatientTable patientDetails={patientDetails} />}
    </div>
  );
};

const PatientTable: React.FC<{ patientDetails: Record<string, any> }> = ({ patientDetails }) => {
  const renderValue = (value: any): React.ReactNode => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof value === 'object' && value !== null) {
      return (
        <table>
          <tbody>
            {Object.entries(value).map(([key, val]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{renderValue(val)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return value.toString();
    }
  };

  return (
    <div className="table-container">
     <Sidebar/> 
    <table className="table">
      <thead>
        <tr>
         
        </tr>
      </thead>
      <tbody>
        {patientDetails
          ? Object.entries(patientDetails).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{renderValue(value)}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
    </div>

  );
};

export default App;