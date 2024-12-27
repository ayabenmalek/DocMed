// AuthContext.js
import { createContext, useState } from 'react';
import React from 'react';
// Création du contexte d'authentification
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
const [auth, setAuth] = useState(null); // Stocke les informations d'authentification

// Fonction pour se connecter, elle va etre remplacé par link de post request 
const login = (role) => {
    setAuth(role);
};

// Fonction pour se déconnecter, elle va etre remplacé par link de post request
const logout = () => {
    setAuth(null);
};

return (
    <AuthContext.Provider value={{ auth }}>
    {children}
    </AuthContext.Provider>
    //  aprés lzm tbdli les variables globales selon link et selon l back, comme login rahi f login, w auth rahi hna f authcontext et normalement nzidou variable t3 iswriter
);
};
export default AuthProvider;