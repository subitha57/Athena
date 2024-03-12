import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SearchTypes: React.FC = () => {
  const [searchTypes, setSearchTypes] = useState<{ name: string, displayname: string }[]>([]);  

  useEffect(() => {
    const fetchSearchTypes = async () => {
      try {
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/configuration/patients/searchtypes', {
          headers: {
            'Authorization': 'Bearer IQSsgaBlwDYUtOxw8GWlsHfWCV4h',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch search types');
        }
        const data = await response.json();
        setSearchTypes(data.searchtypes);
      } catch (error) {
        console.error('Error fetching search types:', error);
      }
    };

    fetchSearchTypes();
  }, []);

  return (
    <div>
    <h2>Patient(Returns the list of possible search types to utilize with the /patients/search endpoint)</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Display Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchTypes.map((searchType, index) => (
            <TableRow key={index}>
              <TableCell>{searchType.name}</TableCell>
              <TableCell>{searchType.displayname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
   /* <div>
      <h2>Search Types</h2>
      <ul>
        {searchTypes.map((searchType, index) => (
          <li key={index}>
            <strong>Name:</strong> {searchType.name}, <strong>Display Name:</strong> {searchType.displayname}
          </li>
        ))}
      </ul>
    </div>*/
  );
};

export default SearchTypes;
