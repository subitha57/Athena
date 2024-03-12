import React from 'react';
import PatientInformation from './components/patient/PatientInformation';
import SearchTypes from './components/patient/SearchType';
import PatientList from './components/patient/PatientList';
import PatientListOptional from './components/patient/PatientListOptional';
import GenderIdentityList from './components/patient/GenderIdentityList';
import Events from './components/patient/Events'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Routes>
       <Route path='/' element={<Sidebar/>} />
       <Route path='/PatientList' element={<PatientList/>} />
       <Route path='/SearchTypes' element={<SearchTypes/>} />
       <Route path='/PatientListOptional' element={<PatientListOptional/>} />
       <Route path='/GenderIdentityList' element={<GenderIdentityList/>} />
       <Route path='/Events' element={<Events/>} />
       <Route path='/PatientInformation' element={<PatientInformation/>} />
    
      </Routes>
  );
};

export default App;
