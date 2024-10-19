import React, { useEffect, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import axios from 'axios'

const App = () => {
  const backendUrl = 'http://localhost:8000';

  const daysMapping = {
    "Monday": "Mo",
    "Tuesday": "Tu",
    "Wednesday": "We",
    "Thursday": "Th",
    "Friday": "Fr",
    "Saturday": "Sa",
    "Sunday": "Su"
  };
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const [flights, setFlights] = useState(false);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const fetchFlights = async () => {
    const response = await axios.get(backendUrl + "/api/flights");
    if (response.status === 201) {
      setFlights(response.data);
    }
  }

  const filterFlights = () => {
    let flightDayCode = '';
    if (selectedDate) {
      const selectedDay = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
      flightDayCode = daysMapping[selectedDay];
    }
    const result = flights.filter(flight => {
      const parsedDays = typeof flight.days === 'string' ? JSON.parse(flight.days) : flight.days;
      const isOriginMatch = origin ? flight.origin.toLowerCase().includes(origin.toLowerCase()) : true;
      const isDestinationMatch = destination ? flight.destination.toLowerCase().includes(destination.toLowerCase()) : true;
      const isDayMatch = flightDayCode ? parsedDays.includes(flightDayCode) : true;

      // Return true if any of the conditions match
      return isOriginMatch && isDestinationMatch && isDayMatch;
    })

    setFilteredFlights(result)

  }
  useEffect(() => {
    fetchFlights();
  }, []);


  return (
    <div className='flex justify-center min-h-screen mx-auto my-auto text-gray-600 text-base bg-gray-50'>
      <div className='flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md'>
        <div>
          <p className='mb-4 text-xl font-semibold text-gray-700'>Search Flights</p>
          <hr className='mb-6 border-gray-300' />
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:gap-8'>
            <div>
              <p className='mb-2 text-gray-600'>Origin</p>
              <input  type="text"  className='w-full px-2 py-3 border rounded'  placeholder='From'  value={origin}  onChange={(e) => setOrigin(e.target.value)} />
            </div>
            <div>
              <p className='mb-2 text-gray-600'>Destination</p>
              <input  type="text"  className='w-full px-2 py-3 border rounded'  placeholder='To'  value={destination}  onChange={(e) => setDestination(e.target.value)}  />
            </div>
          </div>
          <div className='mt-6'>
            <p className='mb-2 text-gray-600'>Select Dates</p>
            <DatePicker  selected={selectedDate}  onChange={date => setSelectedDate(date)}  className='w-full px-2 py-3 border rounded'  />
          </div>
        </div>
        <div  onClick={filterFlights}  className='w-28 py-3 mt-4 bg-black text-white flex justify-center items-center'>
          SEARCH
        </div>

        <hr />
        {/* Flight Results */}
        <div className='mt-4'>
          <p className='font-semibold text-lg'>Available Flights</p>
          <ul className='mt-2'>
            {filteredFlights.length > 0 ? (
              filteredFlights.map(flight => {
                const parsedDays = typeof flight.days === 'string' ? JSON.parse(flight.days) : flight.days;

                return (
                  <li key={flight.id} className='bg-white shadow p-3 my-2 rounded'>
                    <p><strong>{flight.name}</strong></p>
                    <p>{flight.origin} → {flight.destination}</p>
                    <p>Days: {parsedDays.join(', ')}</p>
                  </li>
                )
              })
            ) : (
              <p>No flights found</p>
            )}
          </ul>
        </div>
      </div>

    </div>


  )
}

export default App
