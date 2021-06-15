import { Admin, ListGuesser, Login, Logout, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import {InputoutputList} from "./InputoutputList";
import {InputoutputEdit} from "./InputoutputEdit";
import {StorageList} from "./StorageList";
import {StorageEdit} from "./StorageEdit";
import {ProductList} from "./ProductList";
import {ProductEdit} from "./ProductEdit";
import {ProductstorageList} from "./ProductstorageList";
import inout from "@material-ui/icons/SyncAlt";
import storage from "@material-ui/icons/LocalShipping";
import product from "@material-ui/icons/PostAdd";
import { StorageCreate } from "./StorageCreate";
import { StorageShow } from "./StorageShow";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Dashboard from './Dashboard';

const MyLogoutButton = props => <Logout {...props} icon={<ExitToAppIcon/>} />;


const dataProvider = lb4Provider("http://localhost:3000");

const MyLoginPage = () => (
  <Login
    backgroundImage="https://source.unsplash.com/random/1600x900/daily"
  />
)



const App = () => {
  console.log(InputoutputList())  
return (
  <Admin 
    logoutButton={MyLogoutButton}
    loginPage={MyLoginPage}
    dataProvider={dataProvider}
    dashboard={Dashboard}>

  <Resource 
    name="storages"
    create={StorageCreate} 
    list={StorageList} 
    edit={StorageEdit}
    show={StorageShow}
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
    icon={inout}
  />
  <Resource 
    name="productstorages" 
    list={ProductstorageList} 
  />
  </Admin>
  );
}
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
