import React, { useEffect, useState } from 'react';


const PatientEventsList: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<any[]>([]);

  useEffect(() => {
    const fetchPatientEvents = async () => {
      try {
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/patients/changed/subscription/events', {
          headers: {
            'Authorization': 'Bearer IQSsgaBlwDYUtOxw8GWlsHfWCV4h',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch patient events');
        }
        const data = await response.json();
        setSubscriptions(data.events || []);
      } catch (error) {
        console.error('Error fetching patient events:', error);
      }
    };

    fetchPatientEvents();
  }, []);

  return (
    <div>
    <h2>Patient Changed Subscription Events</h2>
    <table>
      <thead>
        <tr>        
          <th>Event Name</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((subscription: any, index) => (
          <tr key={index}>
          
            <td>{subscription.eventname}</td>
            {/* Add more cells for additional event data */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default PatientEventsList;
