import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase'; // Ensure this points to your Firebase config
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
export default function OAuth() {
  const dispatch = useDispatch();  // Ensure useDispatch is properly initialized
   const navigate=useNavigate();
  const handleGoogleClick = async () => {
    try {
      // Correct spelling for GoogleAuthProvider
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      
      // Correct fetch request
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Fix typo here
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      // Handle response
      const data = await res.json();
      
      // Dispatch success action to Redux store
      dispatch(signInSuccess(data));

      // Access user info from result
      const user = result.user;
      console.log('Google Sign-In Successful:', user);
navigate('/');
      // You can handle user info here (e.g., save to Redux or backend)
    } catch (error) {
      console.log('Could not sign in with Google:', error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
}
