import Device from "./Components/Device";

function App() {
  function RenderTotalElectricLoad() {
    // Returns the total load of all the devices in the house
  }

  return (
    <>
      <h1>Solar Panel Calculator</h1>
      <RenderTotalElectricLoad />

      <div className="device-list">
        <Device />
      </div>
    </>
  )
}

export default App
