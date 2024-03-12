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
import Delete from './components/patient/chartAlert/Delete';
import Create from './components/patient/chartAlert/Create';
import View from './components/patient/chartAlert/View';
import PatientChart from './components/patient/chartAlert/PatientChart';
import PatientForm from './components/patient/chartAlert/Index'


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
       <Route path='/patient-form' Component={PatientForm}/>
          <Route path='/patient-form/:id' Component={PatientForm}/>
          <Route path='/patient-chart/:id' Component={PatientChart}/>
          <Route path = '/Create' Component={Create}/>
          <Route path = '/Delete' Component = {Delete}/>
          <Route path='/View' Component={View}/>
    
      </Routes>
  );
};

export default App;
