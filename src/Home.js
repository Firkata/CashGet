import React, { useEffect } from 'react';
import {app, db} from './base';

const Home = () => {
    useEffect(() => {
        db.collection('test').doc().set({name: 'Firas'});
    },[])

    return(
        <>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        </>
    )
}

export default Home;