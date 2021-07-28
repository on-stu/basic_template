
import React, { useEffect, useState } from 'react';
import AppRouter from './AppRouter';
import { authService, dbService } from './firebase';

function App() {
  const [userObj, setUserObj] = useState(null);

  useEffect(() =>{
    authService.onAuthStateChanged((user) => {
      if (user) {
        if(user.displayName === null){
          user.updateProfile({
            displayName: "user",
          })
        }
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          userType: user.userType,
          updateProfile: (args) => user.updateProfile(args),
        });
      }
    })
  },[])

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };



  return (
    <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
  );
}

export default App;
