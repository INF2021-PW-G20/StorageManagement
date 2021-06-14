import { Admin, Resource, ShowGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
import {InputoutputList} from "./InputoutputList";
import {InputoutputEdit} from "./InputoutputEdit";
import {InputoutputShow} from "./InputoutputShow";
import {StorageList} from "./StorageList";
import {StorageEdit} from "./StorageEdit";
import {ProductList} from "./ProductList";
import {ProductEdit} from "./ProductEdit";
import {ProductstorageList} from "./ProductstorageList";
import inout from "@material-ui/icons/SyncAlt";
import storage from "@material-ui/icons/LocalShipping";
import product from "@material-ui/icons/PostAdd";



const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>

  <Resource 
    name="storages" 
    list={StorageList} 
    edit={StorageEdit} 
    icon={storage}
  />
  <Resource 
    name="products"
    list={ProductList}
    edit={ProductEdit}
    icon={product}
  />
  <Resource 
    name="inputoutputs"
    list={InputoutputList}
    edit={InputoutputEdit}
    show={InputoutputShow}
    icon={inout}
  />
  <Resource 
    name="productstorages" 
    list={ProductstorageList} 
    edit={ProductstorageList}
  />
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
