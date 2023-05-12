import { DataProvider } from "./context/DataContext";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WorkSpace from "./components/WorkSpace";
import SearchBox from "./components/SearchBox";
import Modal from "./components/Modal";


function App() {

  return (
    <div className="app">
      <DataProvider>
        <div className="headerBox">
          <Header />
          <SearchBox/>
        </div>
        <div className="container">
          <Sidebar/>
          <WorkSpace />
          <Modal />
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
