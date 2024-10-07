import React, { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
// import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
//   const history = useHistory();

  const handleSignup = async (e:React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
    //   const user = data.user;

    //   await addDoc(collection(db, "users"), {
    //     username: username,
    //     email: user.email,
    //   });

    //   await db.collection('users').doc(user.uid).set({
    //     username: username,
    //     email: user.email,
    //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   });
    //   history.push('/dashboard');
    console.log(data)
    } catch (error) {
      console.error('Error sign up:', error);
    }
  };

  return (
    <form className='flex flex-col p-8' onSubmit={handleSignup}>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Signup</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
