import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
// import { AuthContext } from '../src/components/Authcontext';

import Ajouter from './writer/Ajouter';
import Commentaires from './writer/Commentaires';
import Dashbord from './writer/Dashborad';
import Ecrits from './writer/Ecrits';

import Login from './user/Login';
import About from './user/About';
import Home from './user/Home';
import Cours from './user/Cours';
import Enrolled from './user/Enrolled';
import Likes from './user/Likes';
import Signup from './user/Signup';
import Theses from './user/Theses';
import Navwriter from './components/Navwriter';
import Navuser from './components/Navuser';



function App() {
  // const { auth } = useContext(AuthContext); // Récupération de la variable auth depuis le contexte
  const auth ='writer';
  const containerClasses = auth === 'writer'
    ? 'flex flex-row gap-0'   // Style pour "writer" avec fond bleu clair et padding
    : 'bg-white'; 
  return (
    <div>
      <BrowserRouter>
        <div className={`page-content ${containerClasses} `}>
              {auth === 'writer' ? <Navwriter /> : <Navuser />}
          
          
            <div className="bg-white w-full" >
              <Routes>
                  {/* Routes pour l'utilisateur "writer" */}
                  {auth === 'writer' && (
                    <>
                      
                      <Route path="/Dashbord" element={<Dashbord />} />
                      <Route path="/Commentaires" element={<Commentaires />} />
                      <Route path="/Ecrits" element={<Ecrits />} />
                      <Route path="/Ajouter" element={<Ajouter />} />
                    </>
                  )}

                  {/* Routes pour les utilisateurs non connectés (auth == null) */}
                  {auth === null && (
                    <>  
                        
                      <Route path="/Login" element={<Login />} />
                      <Route path="/Signup" element={<Signup />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/About" element={<About />} />
                      <Route path="/Cours" element={<Cours />} />
                      <Route path="/Theses" element={<Theses />} />
                    </>
                  )}
                  {auth === 'user' && (
                    <> 
                    
                      <Route path="/Login" element={<Login />} />
                      <Route path="/Signup" element={<Signup />} />
                      <Route path="/" element={<Home />} />
                      <Route path="/About" element={<About />} />
                      <Route path="/Cours" element={<Cours />} />
                      <Route path="/Theses" element={<Theses />} />
                      <Route path="/Enrolled" element={<Enrolled />} />
                      <Route path="/Likes" element={<Likes />} />
                    </>
                  )}
            
              </Routes>
            </div> 
          </div>

      </BrowserRouter>
      </div>
  );
}

export default App;
