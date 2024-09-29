import React from 'react';
import CauseIndexPage from './pages/CauseIndexPage';
import CauseDetailPage from './pages/CauseDetailPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/causes" element={<CauseIndexPage />}></Route>
        <Route path="/causes/:id" element={<CauseDetailPage />}></Route>
      </Routes>
      {/* <Layout>

      </Layout> */}
    </Router>
  );
};


export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
