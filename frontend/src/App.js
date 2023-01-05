import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddBarang from "./components/AddBarang";
import BarangList from "./components/BarangList";
import EditBarang from "./components/EditBarang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarangList/>}/>
        <Route path="/tambah" element={<AddBarang/>}/>
        <Route path="/ubah/:id" element={<EditBarang/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
