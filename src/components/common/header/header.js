import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';


// just let you know that, it is not necessary to use class
//function for this header
//however, we might be using some life cycle functions later
//if it is just a UI component
//then header could be like


// const Header = () => (
//   <div className="Header">
//     <div className='logo'>
//       <h3 className='logo__text'>Lorem</h3>
//     </div>
//     <ul className='list'>
//       <li className='list__item'>
//         <Link to='/'>lorem</Link>
//       </li>
//       <li className='list__item'>
//         <Link to='/'>lorem</Link>
//       </li>
//       <li className="list__item">
//         <Link to='/login'>Login</Link>
//       </li>
//     </ul>
//   </div>
// )
//
// //or
//
// const Header = () => {
//   return (
//     <div className="Header">
//       <div className='logo'>
//         <h3 className='logo__text'>Lorem</h3>
//       </div>
//       <ul className='list'>
//         <li className='list__item'>
//           <Link to='/'>lorem</Link>
//         </li>
//         <li className='list__item'>
//           <Link to='/'>lorem</Link>
//         </li>
//         <li className="list__item">
//           <Link to='/login'>Login</Link>
//         </li>
//       </ul>
//     </div>
//   )
// }
//
// const exampleFunction = () => {
//   return (
//     <div></div>
//   )
// } is equal to
//
// cons exampleFunction = () => (
//   <div></div>
// )
// // you do not need to write return :)


class Header extends Component {

    render() {
        return (
            <div className="Header">
              <div className='logo'>
                <h3 className='logo__text'>Lorem</h3>
              </div>
              <ul className='list'>
                <li className='list__item'>
                  <Link to='/'>lorem</Link>
                </li>
                <li className='list__item'>
                  <Link to='/'>lorem</Link>
                </li>
                <li className="list__item">
                  <Link to='/login'>Login</Link>
                </li>
              </ul>
            </div>
        );
    }
}

export default Header
