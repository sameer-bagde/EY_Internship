import React from 'react';
import './App.css'; 
import Dashboard from './component/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import CreateCampaign from './component/CreateCampaign/CreateCampaign';
import SignUp from './component/Sign-Up/SignUp';
import SignIn from './component/Sign-In/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/create-campaign" element={<CreateCampaign />} />
  <Route path="/sign-in" element={<SignIn />} />
  <Route path="/sign-up" element={<SignUp />} />

</Routes>

        </main>
      </div>
    </Router>
  );
}

export default App;
