import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, SignIn, SignUp, Dashboard } from './pages';
import Projects from './pages/Projects';
import { Header } from './components/Header';
import { FooterCom } from './components/Footer';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/about' element={ <About /> }></Route>
        <Route path='/sign-in' element={ <SignIn /> }></Route>
        <Route path='/sign-up' element={ <SignUp /> }></Route>
        <Route path='/dashboard' element={ <Dashboard /> }></Route>
        <Route path='/projects' element={ <Projects /> }></Route>
      </Routes>

      <FooterCom />
    </BrowserRouter>
  )
}



