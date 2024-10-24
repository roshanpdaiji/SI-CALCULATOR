
// // import './App.css'
// // import { TextField } from '@mui/material';
// // import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// // import Button from '@mui/material/Button';
// // import{useState} from 'react'

// // function App() {

// //   const[principle,setPrinciple]=useState(0)
// //   const[rate,setRate]=useState(0)
// //   const[year,setYear]=useState(0)
// //   const[isPrincipleInputValid, setIsPrincipleInputValid]=useState(false)
// //   const[isYearInputValid, setIsYearInputValid]=useState(false)
// //   const[isPrincipleRateValid, setIsRateInputValid]=useState(false)

// //   const handleValidation=(tag)=>{

// //     const{name,value}=tag 
// //     console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
// //     if(!!value.match(/^\d*.?\d+$/)){

// //       const handleValidation = (tag) => {
// //         const { name, value } = tag;
      
// //         // Log the match result to see if the value is valid
// //         console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));
      
// //         // For principle
// //         if (name === "principle") {
// //           if (!!value.match(/^\d*\.?\d+$/)) {
// //             // Valid principle input
// //             setPrinciple(value);
// //             setIsPrincipleInputValid(true);
// //           } else {
// //             // Invalid principle input
// //             setIsPrincipleInputValid(false);
// //           }
// //         }
      
// //         // For year
// //         else if (name === "year") {
// //           if (!!value.match(/^\d+$/)) {
// //             // Valid year input (assuming only whole numbers for year)
// //             setYear(value);
// //             setIsYearInputValid(true);
// //           } else {
// //             // Invalid year input
// //             setIsYearInputValid(false);
// //           }
// //         }
      
// //         // For rate
// //         else if (name === "rate") {
// //           if (!!value.match(/^\d*\.?\d+$/)) {
// //             // Valid rate input
// //             setRate(value);
// //             setIsRateInputValid(true);
// //           } else {
// //             // Invalid rate input
// //             setIsRateInputValid(false);
// //           }
// //         }
// //       };
      
// // }

// //   }
// //   const handleCalculate=(e)=>{
// //     e.preventDefault()
// //     console.log("button clicked");
// //   }

// //   return (
// //     <>

// //     <div style ={{minHeight:'60vh',width:'100%'}} className='d-flex justify-content-center alighn-items-center mt-3 mb-5'>
// //        <div className='box bg-info p-5 rounded'>
// //         <h2 className='text-danger fw-bolder' style={{textDecoration:"underline"}}>Simple Calculator</h2>
// //         <p>Calculate your simple interest with us</p>
// //         <div className='d-flex justify-content-center align-items-center p-5'>
// //             <h1 className='square-box text-danger d-flex justify-content-center align-items-center'>0</h1>
// //         </div>
// //         <div className="mt-5">

// //         <form className='border rounded p-3 d-flex flex-column p-3'>
// //               <TextField id="principle" name='principle' label="Principle Amount" variant="outlined" onChange={e => handleValidation(e.target)} />
// //               {!isPrincipleInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Principle Input</div>}
              
// //               <TextField id="year" name='year' label="Year" variant="filled" onChange={e => handleValidation(e.target)} />
// //               {!isYearInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Year Input</div>}
              
// //               <TextField id="rate" name='rate' label="Rate of Interest" variant="standard" onChange={e => handleValidation(e.target)} />
// //               {!isRateInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Rate Input</div>}
// //             </form>

// //         </div>
// //         <div className="mt-3 d-flex justify-content-between">
// //             <Button variant="contained" type="submit" onClick={handleCalculate}>Calculate</Button>
// //             <Button variant="outlined">Reset</Button>

// //         </div>
// //        </div>

// //     </div>


// //     </>
// //   )
// // }

// // export default App



// //chatgpt



// import './App.css';
// import { TextField } from '@mui/material';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// function App() {
//   const [principle, setPrinciple] = useState(0);
//   const [rate, setRate] = useState(0);
//   const [year, setYear] = useState(0);
//   const [isPrincipleInputValid, setIsPrincipleInputValid] = useState(true); // Changed to true
//   const [isYearInputValid, setIsYearInputValid] = useState(true); // Changed to true
//   const [isRateInputValid, setIsRateInputValid] = useState(true); // Changed to true

//   const handleValidation = (tag) => {
//     const { name, value } = tag;

//     // Check if the value matches the valid patterns
//     let isValid = false;

//     // For principle
//     if (name === "principle") {
//       isValid = !!value.match(/^\d*\.?\d+$/);
//       setPrinciple(value);
//       setIsPrincipleInputValid(isValid);
//     }
//     // For year
//     else if (name === "year") {
//       isValid = !!value.match(/^\d+$/);
//       setYear(value);
//       setIsYearInputValid(isValid);
//     }
//     // For rate
//     else if (name === "rate") {
//       isValid = !!value.match(/^\d*\.?\d+$/);
//       setRate(value);
//       setIsRateInputValid(isValid);
//     }
//   };

//   const handleCalculate = (e) => {
//     e.preventDefault();
//    setInterest((principle*rate*year)/100)
//   };

//   const handleReset = () => {
//     setPrinciple("");
//     setRate("");
//     setYear("");
//     setInterest("");
//     setIsPrincipleInputValid(false);
//     setIsYearInputValid(false);
//     setIsRateInputValid(false);
//   };
  

//   return (
//     <>
//       <div style={{ minHeight: '60vh', width: '100%' }} className='d-flex justify-content-center align-items-center mt-3 mb-5'>
//         <div className='box bg-info p-5 rounded'>
//           <h2 className='text-danger fw-bolder' style={{ textDecoration: "underline" }}>Simple Calculator</h2>
//           <p>Calculate your simple interest with us</p>
//           <div className='d-flex justify-content-center align-items-center p-5'>
//             <h1 className='square-box text-danger d-flex justify-content-center align-items-center'>{interest}</h1>
//           </div>
//           <div className="mt-5">
//             <form className='border rounded p-3 d-flex flex-column p-3'>
//               <TextField id="principle" name='principle' value={principle} label="Principle Amount" variant="outlined" onChange={e => handleValidation(e.target)} />
//               {!isPrincipleInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Principle Input</div>}
              
//               <TextField id="year" name='year' label="Year" value={year} variant="filled" onChange={e => handleValidation(e.target)} />
//               {!isYearInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Year Input</div>}
              
//               <TextField id="rate" name='rate' value={rate} label="Rate of Interest" variant="standard" onChange={e => handleValidation(e.target)} />
//               {!isRateInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Rate Input</div>}
//             </form>
//           </div>
//           <div className="mt-3 d-flex justify-content-between">
//             <Button variant="contained" type="submit" onClick={handleCalculate}>Calculate</Button>
//             <Button variant="outlined" onclick={handleReset} >Reset</Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




//chatgpt



import './App.css';
import { TextField } from '@mui/material';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [isPrincipleInputValid, setIsPrincipleInputValid] = useState(true); // Changed to true
  const [isYearInputValid, setIsYearInputValid] = useState(true); // Changed to true
  const [isRateInputValid, setIsRateInputValid] = useState(true); // Changed to true

  const handleValidation = (tag) => {
    const { name, value } = tag;

    // Check if the value matches the valid patterns
    let isValid = true;

    // For principle
    if (name === "principle") {
      isValid = !!value.match(/^\d*\.?\d+$/);
      setPrinciple(value);
      setIsPrincipleInputValid(isValid);
    }
    // For year
    else if (name === "year") {
      isValid = !!value.match(/^\d+$/);
      setYear(value);
      setIsYearInputValid(isValid);
    }
    // For rate
    else if (name === "rate") {
      isValid = !!value.match(/^\d*\.?\d+$/);
      setRate(value);
      setIsRateInputValid(isValid);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    // Perform calculation only if inputs are valid
    if (isPrincipleInputValid && isYearInputValid && isRateInputValid) {
      setInterest((principle * rate * year) / 100);
    } else {
      // If any input is invalid, set the corresponding validation states to false
      setIsPrincipleInputValid(!!principle.match(/^\d*\.?\d+$/));
      setIsYearInputValid(!!year.match(/^\d+$/));
      setIsRateInputValid(!!rate.match(/^\d*\.?\d+$/));
    }
  };

  const handleReset = () => {
    setPrinciple("");
    setRate("");
    setYear("");
    setInterest("");
    setIsPrincipleInputValid(true); // Resetting validation state
    setIsYearInputValid(true); // Resetting validation state
    setIsRateInputValid(true); // Resetting validation state
  };

  return (
    <>
      <div style={{ minHeight: '60vh', width: '100%' }} className='d-flex justify-content-center align-items-center mt-3 mb-5'>
        <div className='box bg-info p-5 rounded'>
          <h2 className='text-danger fw-bolder' style={{ textDecoration: "underline" }}>Simple Calculator</h2>
          <p>Calculate your simple interest with us</p>
          <div className='d-flex justify-content-center align-items-center p-5'>
            <h1 className='square-box text-danger d-flex justify-content-center align-items-center'>{interest}</h1>
          </div>
          <div className="mt-5">
            <form className='border rounded p-3 d-flex flex-column p-3'>
              <TextField id="principle" name='principle' value={principle} label="Principle Amount" variant="outlined" onChange={e => handleValidation(e.target)} />
              {!isPrincipleInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Principle Input</div>}
              
              <TextField id="year" name='year' label="Year" value={year} variant="filled" onChange={e => handleValidation(e.target)} />
              {!isYearInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Year Input</div>}
              
              <TextField id="rate" name='rate' value={rate} label="Rate of Interest" variant="standard" onChange={e => handleValidation(e.target)} />
              {!isRateInputValid && <div className="mb-2 text-danger fw-bolder">*Invalid Rate Input</div>}
            </form>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button variant="contained" type="submit" onClick={handleCalculate}>Calculate</Button>
            <Button variant="outlined" onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

