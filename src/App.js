import Form from "./components/form";
import BMI_List from "./components/BMI-List";
import BMI_Score from "./components/BMI-Score";
import "./App.css";

function App() {
  const getValues = (h, w) => {
    console.log(h);
  };
  return (
    <>
      <Form getData={getValues} />
      <BMI_Score />
      <BMI_List />
    </>
  );
}

export default App;
