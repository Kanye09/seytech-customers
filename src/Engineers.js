// import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// const engineers = [
//     {
//         id: 1,
//         name: 'Kanybek',
//         status: 'active'
        
//     },
//     {
//         id: 2,
//         name: 'Atay',
//         status: 'active'
//     },
//     {
//         id: 3,
//         name: 'Farkhat',
//         status: 'active'
//     },
//     {
//         id: 4,
//         name: 'Aikel',
//         status: 'active'
//     },
//     {
//         id: 5,
//         name: 'Aidana',
//         status: 'active'
//     },
// ]

// const Engineer = (props) => {
//     return (
//         props.engineers.map(engineer => {
//             // console.log(engineer)
//             return <li><Link to='/engineer/Atay'>{engineer.name}</Link></li>
//          })
//     )
    
// }

// const SingleEngineer = (props) => {
//     console.log(props)
//     return(
//         props.engineer.map(engineer => {
//             return <div>{engineer.status}</div>
//         })
//     )
// }

// class Engineers extends Component {
//     constructor () {
//         super();
//         this.state = 
//         {
//             engineers,
//         }
//     }
//     render() {
//         return(
//             <Router>
//                 <h3><Link to='/engineer'>Engineers</Link></h3>
//                 <div>
//                     <Switch>
//                         <Route path='/engineer'>
//                         <Engineer engineers = {this.state.engineers}/>
//                         </Route>
//                         <Route path='/engineer/:id'>
//                             <SingleEngineer single = {this.state.engineers}/>
//                         </Route>
//                         <Route path='/single'>
//                             <div>Single page</div>
//                         </Route>
                        
//                     </Switch>
//                 </div>
//             </Router>
            
//         )
//     }
    
// }

// export default Engineers;
