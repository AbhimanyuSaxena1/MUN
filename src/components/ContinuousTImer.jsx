import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
   <main className=' flex item-center  justify-center p-10'>
     <div id="countdown" className='flex rounded-xl bg-[#f8de7c] text-[#521C0D] font-bold border-amber-50 p-10 gap-2 items-center w-fit justify-center font-[Antonio]'>
      <div className="cd-item text-xl rounded-lg text-center font-[Antonio]  p-2">
        <span>{timeLeft.days}</span> <p>Days</p>
      </div>
      <div className="cd-item text-xl  rounded-lg text-center font-[Antonio] p-2">
        <span>{timeLeft.hours}</span> <p>Hour</p>
      </div>
      <div className="cd-item text-xl  rounded-lg text-center font-[Antonio] p-2">
        <span>{timeLeft.minutes}</span> <p>Mins</p>
      </div>
      <div className="cd-item text-xl  rounded-lg text-center font-[Antonio] p-2">
        <span>{timeLeft.seconds}</span> <p>Secs</p>
      </div>
    </div>
   </main>
  );
};

// Usage example with dynamic calculation of timerdate similar to your code
export default function App() {
  // Current date
  const today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = today.getMonth() + 1; // January is 0
  let yyyy = today.getFullYear();

  if (mm === 12) {
    mm = 1;
    yyyy += 1;
  } else {
    mm += 1;
  }
  mm = String(mm).padStart(2, '0');

  // Construct timer date string in YYYY-MM-DD format (recommended ISO format)
const timerDateISO = "2025-10-28T00:00:00";

  // For demo you can override like this: const timerDateISO = "2023-10-05T00:00:00";

  return <Countdown targetDate={timerDateISO} />;
}
