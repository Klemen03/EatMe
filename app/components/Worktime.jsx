import React from 'react';
import { CiClock1 } from 'react-icons/ci';

const Worktime = () => {
  return (
    <div className="flex tracking-wider pr-10 ">
      <div>
        <CiClock1 size={400} />
      </div>
      <div>
        <h1 className="text-4xl uppercase text-green-500 font-semibold">
          Work hours
        </h1>
        <div className="text-2xl flex flex-col gap-5 mt-28">
          <p>Monday-Saturday: 6:00 - 23:00</p>
          <p>Sunday: 6:00 - 20:00</p>
        </div>
      </div>
    </div>
  );
};

export default Worktime;
