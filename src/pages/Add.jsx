import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = () => {
    const [name,setName] = useState('');
    const [origin,setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [days, setDays] = useState([]);

    const resetStates = () => {
        setName('');
        setOrigin('');
        setDestination('');
        setDays([]);
        
    }
    const selectDayHandler = (e) => {
        const selectedDay = e.target.firstChild.data;
        setDays((prev) => (
            prev.includes(selectedDay)
                ? prev.filter((item) => item !== selectedDay)
                : [...prev, selectedDay]
        ));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name",name);
            formData.append("origin",origin);
            formData.append("destination",destination);
            days.forEach(day => {
                formData.append("days[]", day);
            });
            
            const response = await axios.post(backendUrl + "/api/flights", formData);
            if(response.status === 201){
                toast.success("Flight Added");
                resetStates();
            }else{
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-3'>
            <div className='w-full'>
                <p className='mb-2'>Flight name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Flight Name' required />
            </div>
            <div className='w-full'>
                <p className='mb-2'>Origin </p>
                <input onChange={(e) => setOrigin(e.target.value)} value={origin} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Origin' required />
            </div>
            <div className='w-full'>
                <p className='mb-2'>Destination</p>
                <input onChange={(e) => setDestination(e.target.value)} value={destination} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Destination' required />
            </div>
            <div>
                <p className='mb-2'>Days Available</p>
                <div className='flex gap-3'>
                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("Mo") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >Mo</p>
                    </div>

                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("Tu") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >Tu</p>
                    </div>

                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("We") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >We</p>
                    </div>

                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("Th") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >Th</p>
                    </div>

                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("Fr") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >Fr</p>
                    </div>
                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("Sa") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >Sa</p>
                    </div>
                    <div onClick={selectDayHandler} >
                        <p className={` px-3 py-1 cursor-pointer ${days.includes("Su") ? 'bg-orange-300 border border-blue-600' : 'bg-slate-200'}`} >Su</p>
                    </div>
                </div>
            </div>

            <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
    )
}

export default Add
