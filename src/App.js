import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function App() {
   const [year, setYear] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmides, setBmides] = useState('')
  const [gender, setGender] = useState('')

  const inc = () => {
    setYear(parseInt(year) + 1);
  };

  const dec = () => {
    setYear(parseInt(year) - 1);
  };
  const increment = () => {
    setWeight(parseInt(weight) + 1);
  };

  const decrement = () => {
    setWeight(parseInt(weight) - 1);
  };


  const handleYear = (e) => {
    const newYear = e.target.value;
    if (!isNaN(newYear)) {
      setYear(newYear);
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue)) {
      setWeight(newValue);
    }
  };

  const handleCalculate = (e) => {
    if (!weight || !height || !year) {
      alert('Please fill the form completely');
    } else {
      const newHeight = parseFloat(height) / 100;
      const bmiValue = (parseFloat(weight) / Math.pow(newHeight, 2)).toFixed(2);
      setBmi(bmiValue);
      
      let bmiStatus;
      if (bmiValue < 18.5) {
        bmiStatus = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiStatus = 'Normal weight';
      } 
      else if(bmiValue>=25 && bmiValue<=29.9){
        bmiStatus ='OverWeight'
      }
      else {
        bmiStatus = 'Obesity';
      }
  
      setBmides(bmiStatus);
    }
   
  };

  const handleMale=()=>{
    setGender('Male')
  }
  const handleFemale =()=>{
    setGender('Female')
  }

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setYear('');
    setBmi('');
  };

  return (
    <div className="App">
      <div style={{ height: '100vh' }} className="container d-flex flex-column justify-content-center align-items-center w-100 bg-light">
        <div className="d-flex justify-content-center align-items-center w-25 flex-column rounded mt-4 shadow bg-secondary" style={{ backgroundColor: 'navyblue' }}>
          <h1>{bmi}</h1>
          <p><b className='text-light'> Total BMI</b></p>
          {bmi && <p>{bmides}</p>} {/* Conditionally render BMI status */}
          {gender && <p>Gender: {gender}</p>}
        </div>
        <div className="d-flex justify-content-between align-items-between mt-4">
          <button onClick={handleMale} style={{ width: '155px' }} className="btn btn-dark me-3"><i className="fa-solid fa-mars fa-5x"></i><p>Male</p></button>
          <button onClick={handleFemale} style={{ width: '160px' }} className="btn btn-dark"><i className="fa-solid fa-venus fa-5x"></i><p>Female</p></button>
        </div>
        <div className="d-flex justify-content-center align-items-center w-25 flex-column rounded mt-4 shadow bg-secondary" style={{ backgroundColor: 'navyblue', height: '165px' ,width:'165px'}}>
          <p><b>Height (in cm)</b></p>
          <input className="bg-dark text-light" value={height} onChange={(e) => setHeight(e.target.value)} style={{ border: 'none' }} type="text" name="height" id="" />
        </div>
        <div className="d-flex justify-content-center align-items-center w-100 ">
          <div style={{ width: '155px', height: '160px' }} className="border rounded mt-4 m-2 bg-secondary">
            <Container>
              <Row>
                <Col className="text-center"><b>Weight</b></Col>
                <h1 className="text-center text-primary mt-1"><input type="text" value={weight} onChange={handleChange} className="w-50" /></h1>
              </Row>
              <Row>
                <Col className="ms-4 mt-2"><button onClick={increment} className="btn btn-dark">+</button></Col>
                <Col className="mt-2"><button onClick={decrement} className="btn btn-dark">-</button></Col>
              </Row>
            </Container>
          </div>
          <div>
            <div style={{ width: '155px', height: '150px' }} className="border rounded mt-4 m-2 bg-secondary">
              <Container>
                <Row>
                  <Col className="text-center"><b>Age</b></Col>
                  <h1 className="text-center mt-1"><input type="text" value={year} onChange={handleYear} className="w-50" /></h1>
                </Row>
                <Row>
                  <Col className="ms-4 mt-2"><button onClick={inc} className="btn btn-dark">+</button></Col>
                  <Col className="mt-2"><button onClick={dec} className="btn btn-dark">-</button></Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button onClick={handleCalculate} style={{ width: '165px' }} className="btn btn-dark m-2">Calculate</button>
          <button onClick={handleReset} style={{ width: '165px' }} className="btn btn-dark">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
