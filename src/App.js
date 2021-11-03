import Main from "./pages/main/Main";
import { dataList } from "./pages/main/data";

function App() {
  return (
    <>
      <Main varDataList = {dataList} key={dataList.id} />
    </>
  );
}

export default App;
