import React from 'react';
import PatientInformation from './components/patient/PatientInformation';
import SearchTypes from './components/patient/SearchType';
import PatientList from './components/patient/PatientList';
import PatientListOptional from './components/patient/PatientListOptional';
import GenderIdentityList from './components/patient/GenderIdentityList';
import Events from './components/patient/Events'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import SinglePatientView from './components/patient/SinglePatientView';

import AvailableBed from './components/patient/AvailableBed';
import PatientTable from './components/patient/chartAlert/PatientTable';


const App: React.FC = () => {
  return (
    <Routes>
       <Route path='/' element={<Sidebar/>} />
       <Route path='/PatientList' element={<PatientList/>} />
       <Route path='/ChartAlert' element={<PatientTable/>} />
       <Route path='/SinglePatientView' element={<SinglePatientView/>} />
       <Route path='/SearchTypes' element={<SearchTypes/>} />
       <Route path='/PatientListOptional' element={<PatientListOptional/>} />
       <Route path='/GenderIdentityList' element={<GenderIdentityList/>} />
       <Route path='/Events' element={<Events/>} />
       <Route path='/PatientInformation' element={<PatientInformation/>} />
       <Route path='/AvailableBed' element={<AvailableBed/>}/>
    
      </Routes>
  );
};

export default App;
