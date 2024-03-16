import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App () {
  const [checkedItem, setCheckedItem] = useState({})

  const handleCheckbox = (e) => {
    console.log(e.target.id, e.target.checked)
    setCheckedItem({
      ...checkedItem,
      [e.target.id]: e.target.checked
    })
  }
  return (
    <>
      <main className="w-screen h-screen bg-slate-300 flex flex-col justify-start items-center p-10">
        <section className="checkboxlist">
          <Checkbox name={"checkbox1"} value={checkedItem.checkbox1 || false} handleOnChange={handleCheckbox} />
          <Checkbox name={"checkbox2"} value={checkedItem.checkbox2 || false} handleOnChange={handleCheckbox} />
          <Checkbox name={"checkbox3"} value={checkedItem.checkbox3 || false} handleOnChange={handleCheckbox} />
          <Checkbox name={"checkbox4"} value={checkedItem.checkbox4 || false} handleOnChange={handleCheckbox} />
        </section>
        <section className="value mt-4 flex">
          {Object.entries(checkedItem).map((key, i) => {
            console.log(key,i)
            return (
              <h1 className="text-2xl font-extrabold mr-2" key={i}>{key[1] && key[0]}</h1>
            );
          })}
        </section>
      </main>
    </>
  )
}

export default App
