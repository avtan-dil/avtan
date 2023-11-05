                                   // redux-toolkit //

// import React from 'react';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { Provider, useSelector, useDispatch } from 'react-redux';

// // Create a Redux slice
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { count: 0 },
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//   },
// });

// // Extract action creators from the slice
// export const { increment, decrement } = counterSlice.actions;

// // Create a Redux store with the slice
// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer, // Use the slice reducer with a key
//   },
// });

// // React component
// function App() {
//   // Access the count from the Redux store using useSelector
//   const count = useSelector((state) => state.counter.count);

//   // Dispatch actions using useDispatch
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Redux Toolkit Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

// // Render the app with the Redux store provided
// function Root() {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// }

// export default Root;         

                          // redux-toolkit //
                          // redux //

// import React from 'react';
// import { createStore } from 'redux';
// import { connect, Provider } from 'react-redux';

// // Reducer function
// const counterReducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// // Create a Redux store
// const store = createStore(counterReducer);

// // Redux actions
// const increment = () => ({
//   type: 'INCREMENT',
// });

// const decrement = () => ({
//   type: 'DECREMENT',
// });

// // React component
// const Counter = ({ count, increment, decrement }) => (
//   <div>
//     <p>Count: {count}</p>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//   </div>
// );

// // Connect Redux to React
// const mapStateToProps = (state) => ({
//   count: state.count,
// });

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

// const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// // App component
// const App = () => (
//   <div>
//     <h1>Redux Counter App</h1>
//     <ConnectedCounter />
//   </div>
// );

// // Render the App
// const AppWithStore = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// export default AppWithStore;

                                          // redux
                                           
                                           
                                           // local storage 


// import React, { useState, useEffect } from 'react';

// function App() {
//   // State to hold the user's name
//   const [name, setName] = useState('');

//   // Function to handle input changes
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   // Function to handle saving the name to localStorage
//   const saveName = () => {
//     localStorage.setItem('userName', name);
//   };

//   // const deleteName = () => {
//   //   localStorage.removeItem("userName", name)
//   // }

//   // Load the user's name from localStorage when the component mounts
//   useEffect(() => {
//     const savedName = localStorage.getItem('userName');
//     if (savedName) {
//       setName(savedName);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Local Storage Example</h1>
//       <label>
//         Enter your name: 
//         <input type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <button onClick={saveName}>Save to Local Storage</button>
//       {/* <button onClick={deleteName}>delete from Local Storage</button> */}
//       <div>
//         {name && <p>Your name: {name}</p>}
//       </div>
//     </div>
//   );
// }

// export default App;
                                
                                   
                                   
                                   
                                   // local storage

// outlet


// import React from 'react';
// import { Route, Routes, Link, Outlet } from 'react-router-dom';

// const Home = () => <h1>Home Page</h1>;

// function About() {
//   return (
//     <div>
//       <h1>About children</h1>
//       <Outlet /> {/* This is where child routes will be rendered */}
//     </div>
//   );
// }

// const AboutUs = () => <p>About Us</p>;
// const Contact = () => <p>Contact</p>;
// const Information = () => <p>information</p>;


// function App() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="about">About</Link>
//           </li>
//           <li>
//             <Link to="about/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="about/info">Info</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />}>
//           <Route index element={<AboutUs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path='info' element={<Information />}/> 
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

//                                 // outlet





                                            // useNavigate
//  import { useNavigate } from 'react-router-dom';

//  function MyComponent() {
//    // Get the navigate function from the hook
//    const navigate = useNavigate()

//    // Define a function to navigate to a different route
//    const handleNavigate = () => {
//      navigate('/other-route');
//    };

//    return (
//      <div>
//        <h1>Hello, this is my component</h1>
//        <button onClick={handleNavigate}>Go to Other Route</button>
//      </div>
//    );
//  }

//  export default MyComponent;

// import { useNavigate } from "react-router-dom"

// function Navigac() {
//     const navigacia = useNavigate()

//     const navigaciaClick = () => {
//         navigacia("/navigacia")
//     }
//   return (
//     <>
//      <h1>navigate</h1>
//      <button onClick={navigaciaClick}>click it</button>
//     </>
//   )
// }

// export default Navigac

// import { useNavigate } from "react-router-dom"


// function HomePage() {
//     const home = useNavigate()

//     function homepa() {
//         home("/")
//     }
//   return (
//     <>
//     <h1>home page</h1>
//     <button onClick={homepa}>click home</button>
//     </>
//   )
// }

// export default HomePage
                                                  // useNavigate
                                                  //  useContext

// import React, { useState } from "react";
// import { Nav } from "./Nav"; // Change the import to use named import

// export const Context = React.createContext();

// function App() {
//   const [signedIn, setSignedIn] = useState(false);
//   return (
//     <Context.Provider value={[signedIn, setSignedIn]} >
//       <Nav />
//       <h1>{signedIn ? "Sign in" : 'Sign out'}</h1>
//     </Context.Provider>
//   );
// }

// export default App;

// import React, { useContext } from "react";
// import { Context } from "./App";

// export default function Btn() {
//     const [signedIn, setSignedIn] = useContext(Context);
//     return (
//         <button onClick={() => setSignedIn(!signedIn)}>
//             {!signedIn ? "Sign out" : 'Sign in'}
//         </button>
//     );
// }

// import React from "react";
// import Btn from "./Btn";

// export function Nav() {
//     return (
//         <div className="nav">
//             <Btn />
//         </div>
//     );
// }

// usecontext //
