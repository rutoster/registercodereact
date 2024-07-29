// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './LoginFormComponent.css';
// import LogoGoogle from '../assets/LogoGoogle.webp';
// import facebook from '../assets/facebook-round-color-icon.webp';
// import emailIcon from '../assets/mail-icon.png';
// import passwordIcon from '../assets/lock.png';
// import eye from '../assets/eye.png';

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(false); // Change default state to register page
//   const [toastMessage, setToastMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
//       console.log(response.data);
//       // Handle login success
//     } catch (error) {
//       console.error('There was an error logging in!', error);
//       // Handle login error
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/register', { email, password });
//       console.log(response.data);
//       setToastMessage(response.data.message);
//       // לאחר רישום מוצלח, קרא לפונקציה checkConnection
//       checkConnection();
//     } catch (error) {
//       console.error('There was an error registering!', error);
//       // Handle registration error
//     }
//   };

//   const redirectToLogin = () => {
//     navigate('/login');
//   };

//   const redirectToRegister = () => {
//     navigate('/register');
//   };

//   const checkConnection = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/test-connection');
//       if (response.status === 200) {
//         setToastMessage('Successfully connected to OpenAI Chat GPT API');
//       } else {
//         setToastMessage('Failed to connect to OpenAI Chat GPT API');
//       }
//     } catch (error) {
//       console.error('Error connecting to OpenAI:', error);
//       setToastMessage('Error connecting to OpenAI Chat GPT API');
//     }
//   };

//   return (
//     <div className="right-side">
//       <div className="login-form">
//         <h2>{isLogin ? 'Log in' : 'Register'}</h2>
//         <form onSubmit={isLogin ? handleLogin : handleRegister}>
//           <div className="input-container">
//             <img src={emailIcon} alt="Email icon" className="icon" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <img src={passwordIcon} alt="Password icon" className="icon" />
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
//               <img src={eye} alt="Eye icon" className="eye-icon" />
//             </span>
//           </div>
//           {isLogin && (
//             <a href="#" className="forgot-password">Forgot password?</a>
//           )}
//           <button type="submit" className="login-button">{isLogin ? 'Log in' : 'Register'}</button>
//         </form>
//         <div className="divider">
//           <span className="divider-line"></span>
//           <span className="divider-text">Or</span>
//           <span className="divider-line"></span>
//         </div>
//         <div className="alternative-login">
//           <button className="google-login">
//             <img src={LogoGoogle} alt="Google icon" className="icon" />
//             Google
//           </button>
//           <button className="facebook-login">
//             <img src={facebook} alt="Facebook icon" className="icon" />
//             Facebook
//           </button>
//         </div>
//         <p className="no-account">{isLogin ? 'Have no account yet?' : 'Already have an account?'}</p>
//         <div className="register-button-container">
//           <button onClick={isLogin ? redirectToRegister : redirectToLogin} className="register-button">
//             {isLogin ? 'Register' : 'Log in'}
//           </button>
//         </div>
//       </div>
//       {toastMessage && (
//         <div className="toast-message">
//           {toastMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginFormComponent.css';
import LogoGoogle from '../assets/LogoGoogle.webp';
import facebook from '../assets/facebook-round-color-icon.webp';
import emailIcon from '../assets/mail-icon.png';
import passwordIcon from '../assets/lock.png';
import eye from '../assets/eye.png';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Change default state to register page
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false); // ניהול תצוגת הודעת טוסט
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      console.log(response.data);
      // Handle login success
    } catch (error) {
      console.error('There was an error logging in!', error);
      // Handle login error
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', { email, password });
      console.log(response.data);
      setToastMessage(response.data.message);
      setShowToast(true); // הצגת הודעת טוסט
      checkConnection();
    } catch (error) {
      console.error('There was an error registering!', error);
      // Handle registration error
    }
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  const redirectToRegister = () => {
    navigate('/register');
  };

  const checkConnection = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/test-connection');
      if (response.status === 200) {
        setToastMessage('Successfully connected to OpenAI Chat GPT API');
      } else {
        setToastMessage('Failed to connect to OpenAI Chat GPT API');
      }
      setShowToast(true); // הצגת הודעת טוסט
    } catch (error) {
      console.error('Error connecting to OpenAI:', error);
      setToastMessage('Error connecting to OpenAI Chat GPT API');
      setShowToast(true); // הצגת הודעת טוסט
    }
  };

  const closeToast = () => {
    setShowToast(false); // סגירת הודעת טוסט
  };

  return (
    <div className="right-side">
      <div className="login-form">
        <h2>{isLogin ? 'Log in' : 'Register'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <div className="input-container">
            <img src={emailIcon} alt="Email icon" className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <img src={passwordIcon} alt="Password icon" className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              <img src={eye} alt="Eye icon" className="eye-icon" />
            </span>
          </div>
          {isLogin && (
            <a href="#" className="forgot-password">Forgot password?</a>
          )}
          <button type="submit" className="login-button">{isLogin ? 'Log in' : 'Register'}</button>
        </form>
        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">Or</span>
          <span className="divider-line"></span>
        </div>
        <div className="alternative-login">
          <button className="google-login">
            <img src={LogoGoogle} alt="Google icon" className="icon" />
            Google
          </button>
          <button className="facebook-login">
            <img src={facebook} alt="Facebook icon" className="icon" />
            Facebook
          </button>
        </div>
        <p className="no-account">{isLogin ? 'Have no account yet?' : 'Already have an account?'}</p>
        <div className="register-button-container">
          <button onClick={isLogin ? redirectToRegister : redirectToLogin} className="register-button">
            {isLogin ? 'Register' : 'Log in'}
          </button>
        </div>
      </div>
      {showToast && (
        <div className="toast-message">
          {toastMessage}
          <button onClick={closeToast} className="close-toast-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
