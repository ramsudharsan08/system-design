import UseForm from "./components/UseForm";

function App() {
  const handleFormSubmit = (data) => {
    console.log(data);
  }

  return (
    <UseForm onSubmit={handleFormSubmit} />
  )
}

export default App;
