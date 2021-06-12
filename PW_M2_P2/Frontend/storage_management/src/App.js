import { Admin, Resource, EditGuesser, EditButton } from "react-admin";
import lb4Provider from "react-admin-lb4";
import {InputoutputList} from "./InputoutputList";
import {StorageList} from "./StorageList";
import {ProductList} from "./ProductList";
import {ProductstorageList} from "./ProductstorageList";

const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
  <Resource name="storages" list={StorageList} edit={EditGuesser} />
  <Resource name="products" list={ProductList} />
  <Resource name="inputoutputs" list={InputoutputList} />
  <Resource name="productstorages" list={ProductstorageList} />
  </Admin>
  );

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

export default App;
