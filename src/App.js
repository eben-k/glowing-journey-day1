import React,{ useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import CountdownTimer from './components/CountdownTimer';

function App() {
  const [name, setName] = useState('');
  const handleEventChange = event => {
      setName(event.target.value);
  };
  const [date, setDate] = useState('');
  const handleDateChange = event => {
      setDate(event.target.value);
  };
  const [time, setTime] = useState('');
  const handleTimeChange = event => {
      setTime(event.target.value);
  };
  const [data, setData] = useState({name, date});
  const addEvent = event => {
        event.preventDefault();
        setData({name, date});
    }

  return (
    <div className="App">
      <UserInput 
      onNameChange={handleEventChange}
      onDateChange={handleDateChange}
      onTimeChange={handleTimeChange}
      name={name}
      date={date}
      time={time}
      onButtonClick={addEvent}
      />
      <CountdownTimer
      name={data.name}
      date={data.date} />
    </div>
  );
}

export default App;
