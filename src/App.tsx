import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthProvider';
import { Auth } from './pages/Auth/Auth';
import Main from './pages/Main/Main';

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      {!auth.isAuth ? <Auth /> : <Main />}
    </div>
  );
}

export default App;
