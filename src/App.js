import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { ShopContextProvider } from './Context/ShopContext';
import AuthProvider from './Context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </ShopContextProvider>
    </AuthProvider>
  );
}
export default App
