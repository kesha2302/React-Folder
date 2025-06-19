import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FunComp1 from './Components/FunComp';
import ClassComp from './Components/ClassComp';
import ArrowFun from './Components/ArrowFun';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import { Routes , Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Feedback from './Components/Feedback';
import Clickevent from './Components/Clickevent';
import ClickEvent2 from './Components/ClickEvent2';
import Table from './Components/Table';
import FunProp from './Components/FunProp';
import ClassProp from './Components/ClassProp';
import Portal1 from './Components/Portal1';
import Styling from './Components/Styling';
import ClassState from './Components/ClassState';
import Hook1 from './Components/Hook1';
import EventBinding from './Components/EventBinding';
import ConditionalRendering from './Components/ConditionalRendering';
import MultiCarousel from './Components/MultiCarousel';
import FormHandling from './Components/FormHandling';
import FormHandling2 from './Components/FormHandling2';
import CParentcomp from './Components/CParentcomp';
import FParentcomp from './Components/FParentcomp';
import List from './Components/List';
import ListData from './Components/ListData';
import HookArray from './Components/HookArray';
import LifeCycle1 from './Components/LifeCycle1';
import LifeCycle3 from './Components/LifeCycle3';

function App() {
  return (
    <div className="App">

{/* <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='Feedback' element={<Feedback/>}/>
      </Routes> */}

      {/* <Clickevent/> */}
      {/* <ClickEvent2/> */}
      {/* <Table/> */}
      {/* <FunProp fname="kesha" age='23' other={{email:"xyz@gmail.com", address:"Anand"}}/>
      <FunProp fname="Kinjal" age='24' other={{email:"abc@gmail.com", address:"Borsad"}}/> */}

      {/* <ClassProp fname="Kesha" age='23'/> */}

      {/* <Portal1/> */}
      {/* <Styling paragraph={false}/> */}
      {/* <ClassState/> */}
      {/* <Hook1/> */}
      {/* <EventBinding/> */}
      {/* <ConditionalRendering/> */}
      {/* <MultiCarousel/> */}

      {/* <FormHandling/> */}
      {/* <FormHandling2/> */}

      {/* <CParentcomp/> */}
      {/* <FParentcomp/> */}
      {/* <List/> */}
      {/* <ListData/> */}
      {/* <HookArray/> */}
      {/* <LifeCycle1/> */}
      <LifeCycle3/>

    </div>
  );
}

export default App;
