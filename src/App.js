import logo from './logo.svg';
import { Navbar } from './componets/Navbar';
import { Rules } from './componets/Rules';
import { useState } from 'react';
import './App.css';

function App() {

  const [edit, setEdit] = useState(false);
  const handleEdit = (value) => {
    setEdit(value);
  };
  return (
    <div>
     <Navbar edit={edit} handleEdit={handleEdit}></Navbar>
      <Rules edit={edit}></Rules>
    </div>
  );
}

export default App;
