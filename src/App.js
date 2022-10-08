import React, { useState } from "react";

function App() {
  const [Password, setPassword] = useState("");
  const [PasswordLen, setPasswordLen] = useState(8);
  const [Uppercase, setUppecase] = useState(false);
  const [Lowercase, setLowerCase] = useState(true);
  const [NumbersAlw, setNumberAlw] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  let lowersign = Lowercase.toString()
  let upperalpa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let loweralpa = "abcdefghijklmnopqrstuvwxyz";
  let specialalpa = ",./;'[]=-`<>?:\"{}|+_)(*&^%$#@!~";
  let numberalpa = "123456789";
  let combine = "";
  let value = "";
  let randomnum;

  if (Uppercase) {
    combine = combine + upperalpa;
    // console.log(combine);
  }
  if (Lowercase) {
    combine = combine + loweralpa;
    // console.log(combine);
  }
  if (specialChar) {
    combine = combine + specialalpa;
    // console.log(combine);
  }
  if (NumbersAlw) {
    combine = combine + numberalpa;
    // console.log(combine);
  }
  // const change = (e) => {
  //   console.log(e.target.checked);
  // };

  const PasswordGenerated = () => {
    for (let i = 0; i < PasswordLen; i++) {
      randomnum = Math.floor(Math.random() * combine.length);
      value = value + combine[randomnum];
    }
    setPassword(value);
  };
  // PasswordGenerated()

  const copyToClipboard = () => {
    const newTextarea = document.createElement('textarea');
    newTextarea.innerText = Password
    document.body.appendChild(newTextarea)
    newTextarea.select()
    document.execCommand('copy')
    newTextarea.remove()
  }

  const copyPassword = () =>{
    // console.log("Click")
    if(Password == ""){
      
      document.getElementsByClassName('notification')[0].innerHTML="Please firstly! Choice your Password to be Copied"
    }
    else{
    document.getElementsByClassName('notification')[0].innerHTML=`Password Copy To Clipboard : <br /> ${Password}`
    }
    copyToClipboard()
    document.getElementsByClassName('notification')[0].style.display="block"
    setInterval(() => {
      document.getElementsByClassName('notification')[0].style.display="none"
    }, 2000);

  }

  return (
    <>
      <div className="outer">
        <div className="notification">
          Password Copy To Clipboard : <br />{Password}
        </div>

        <div className="inner">
          <h1>Password Generator</h1>
          <div id="text">
            <h3 >{Password}</h3>
            <i onClick={copyPassword} class="fa-regular fa-copy copyICON"></i>
          </div>
          <br />
          <div className="choice">
            <label htmlFor="length">Password Length</label>
            <input
              type="number"
              name="length"
              id="length"
              max="20"
              min="8"
              defaultValue={PasswordLen}
              onChange={(e) => {
                // console.log(e.target.value);
                setPasswordLen(e.target.value);
                // PasswordGenerated();
              }}
            />
            <br />
            <label htmlFor="capital">Include Uppercase Letters</label>
            <input
              type="checkbox"
              name="capital"
              id="capital"
              checked={Uppercase}
              onChange={(e) => {
                // console.log(e.target.checked);
                // PasswordGenerated();
                setUppecase(e.target.checked);
              }}
            />
            <br />
            <label htmlFor="capital">Include Lowercase Letters</label>
            <input
              type="checkbox"
              name="capital"
              id="capital"
              // defaultChecked={Lowercase}
              defaultChecked="true"
              // Checked={Lowercase.toString()}
              // Checked={lowersign}
              onChange={(e) => {
                // console.log(e.target.checked);
                setLowerCase(e.target.checked);
                // PasswordGenerated();
              }}
            />
            <br />
            <label htmlFor="number">Include Numbers</label>
            <input
              type="checkbox"
              name="number"
              id="number"
              Checked={NumbersAlw}
              onChange={(e) => {
                // console.log(e.target.checked);
                setNumberAlw(e.target.checked);
                // PasswordGenerated();
              }}
            />
            <br />

            <label htmlFor="Special">Include Special Character</label>
            <input
              type="checkbox"
              name="Special"
              id="Special"
              Checked={specialChar}
              onChange={(e) => {
                // console.log(e.target.checked);
                setSpecialChar(e.target.checked);
                // PasswordGenerated();
              }}
            />
          </div>
            <button onClick={PasswordGenerated} id="showBtn">Show</button>
        </div>
      </div>
    </>
  );
}

export default App;
