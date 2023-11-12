// import { useState } from 'react'

function App() {
  return (
    <>
      <div className="lg:w-full lg:h-12 px-6 lg:px-[300px] bg-gray-100 justify-between items-center inline-flex">
        <div className="justify-start items-start gap-6 flex">
          <div className="py-3.5 bg-gray-100 shadow-inner justify-start items-center gap-1 flex">
            <div className="text-blue-700 text-sm font-medium font-['Inter'] leading-tight">
              Home
            </div>
          </div>
          <div className="py-3.5 bg-gray-100 justify-start items-center gap-1 flex">
            <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
              Find Job
            </div>
          </div>
          <div className="py-3.5 bg-gray-100 justify-start items-center gap-1 flex">
            <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
              Employers
            </div>
          </div>
          <div className="py-3.5 bg-gray-100 justify-start items-center gap-1 flex">
            <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
              Dashboard
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-6 flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative"></div>
            </div>
            <div className="w-6 h-6 justify-center items-center inline-flex">
              <img src="public\images\PhoneCall.svg"></img>
              <div className="w-6 h-6 relative"></div>
            </div>
            <div className="text-zinc-900 text-sm font-medium font-['Inter'] leading-tight">
              +355 685 73 412
            </div>
          </div>
          <div className="justify-center items-center gap-3 flex">
            <img className="w-6 h-4" src="\public\images\engflag.png" />
            <div className="self-stretch justify-center items-center gap-1 inline-flex">
              <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                English
              </div>
              <div className="w-4 h-4 relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:h-[90px] px-6 lg:px-[150px] py-5 bg-white justify-between items-center inline-flex">
        <div className="justify-center items-center gap-8 flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-10 h-10 relative"></div>
            <img src="\public\images\briefcase1.svg" />
            <div className="text-zinc-900 text-2xl font-semibold font-['Inter'] leading-10">
              CareerHunter
            </div>
          </div>
          <div className="pl-6 pr-[252px] py-[9px] bg-white rounded-[5px] border border-zinc-200 justify-start items-center flex">
            <div className="self-stretch justify-center items-center gap-5 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <img
                  className="w-6 h-4"
                  src="public/images/Flag_of_Albania.svg.png"
                />
                <select
                  className=" bg-white  rounded leading-tight focus:outline-none focus:bg-white"
                  id="location"
                >
                  <option value="tirana">Tirana</option>
                  <option value="prishtina">Prishtina</option>
                </select>
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative"></div>
                </div>
              </div>
              <div className="w-2 h-8 origin-top-left border-l-2  border-zinc-200"></div>
              <div className="justify-start items-start gap-3 flex">
                <div className="w-6 h-6 relative"></div>
                <div className="text-gray-400 text-base font-normal font-['Inter'] leading-normal">
                  Job tittle, keyword, company
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-3 flex">
          <div className="px-6 py-3 rounded-[3px] border border-indigo-200 justify-center items-center gap-3 flex">
            <div className="text-blue-700 text-base font-semibold font-['Inter'] capitalize leading-normal">
              Sign in
            </div>
          </div>
          <div className="px-6 py-3 bg-blue-700 rounded-[3px] justify-center items-center gap-3 flex">
            <div className="text-white text-base font-semibold font-['Inter'] capitalize leading-normal">
              Post a Job
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
