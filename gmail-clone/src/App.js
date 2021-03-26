import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {useSelector}  from 'react-redux';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
       <div className="app">
          <Header />


          <div className='app__body' >
            <Sidebar />

            <Switch>
               <Route path='/mail' >
                  <Mail />
               </Route>
               
                <Route path='/' >
                  <EmailList />
                </Route>

            </Switch>
          </div>
          <SendMail />
       </div>
     </Router>
  );
}

export default App;
