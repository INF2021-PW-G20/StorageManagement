import { Admin, Login, Logout, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { InputoutputList } from './InputoutputList';
import { InputoutputEdit } from './InputoutputEdit';
import { InputoutputShow } from './InputoutputShow';
import { InputoutputCreate } from './InputoutputCreate';
import { StorageList } from './StorageList';
import { StorageEdit } from './StorageEdit';
import { ProductList } from './ProductList';
import { ProductEdit } from './ProductEdit';
import { ProductstorageList } from './ProductstorageList';
import { ProductstorageShow } from './ProductstorageShow';
import inout from '@material-ui/icons/SyncAlt';
import storage from '@material-ui/icons/LocalShipping';
import product from '@material-ui/icons/PostAdd';
import { StorageCreate } from './StorageCreate';
import { ProductCreate } from './ProductCreate';
import { StorageShow } from './StorageShow';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Dashboard from './Dashboard';
import { theme } from './theme';

const dataProvider = lb4Provider('http://localhost:3000');

const App = () => {
  console.log(InputoutputList());
  return (
    <Admin
      logoutButton={MyLogoutButton}
      loginPage={MyLoginPage}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      theme={theme}
    >
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
        create={ProductCreate}
        list={ProductList}
        edit={ProductEdit}
        icon={product}
      />

      <Resource
        name="inputoutputs"
        list={InputoutputList}
        edit={InputoutputEdit}
        icon={inout}
        show={InputoutputShow}
        create={InputoutputCreate}
      />
      <Resource
        name="productstorages"
        list={ProductstorageList}
        show={ProductstorageShow}
      />
    </Admin>
  );
};
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
