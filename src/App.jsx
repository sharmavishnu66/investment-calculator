import { useState } from "react";
import Result from "./components/Result"
import UserInputs from "./components/UserInputs"

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const isValid = userInput.duration >=1;

const handleChangeEvent =(inputIdentifier,newValue)=>{
    setUserInput(preInput =>
  {  return {
        ...preInput,
        [inputIdentifier]: +newValue

}}
    );

}
  return (
   <main>
    <UserInputs userInput={userInput} onChange={handleChangeEvent}/>
    {!isValid && <p className="center">Please enter a valid durations</p>}
   {isValid && <Result inputs={userInput} />}
   </main>
  )
}

export default App
