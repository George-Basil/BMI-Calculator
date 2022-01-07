import { useState } from "react";

function Form({ getData }) {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const getValue1 = (e) => {
    if (!isNaN(Weight) && !isNaN(Height)) {
      getData(Height, Weight);
    }
  }

  return (
    <div>
      <div className="mainbox">
        <div className="Heading">BMI CALCULATOR</div>
        <table className="first">
          <tbody>
            <tr className="firstraw">
              <td className="firstraw_1">Height(m)</td>
              <td className="firstraw_1">Weight(kg)</td>
            </tr>
            <tr className="secondraw">
              <td>
                <input
                  type="text"
                  value={Height}
                  onChange={(e)=>setHeight(e.target.value)}
                  className="secondraw_1"
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  value={Weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="secondraw_1"
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="button" onClick={getValue1}>
          GET BMI
        </button>
        {isNaN(Weight) || isNaN(Height) ? (
          <div className="warning" role="alert">
            Please enter a valid number!!
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Form;
