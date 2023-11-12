// import { useState } from 'react'

function App() {
  return (
    <>
      <div className="w-full h-12 px-[300px] bg-gray-100 justify-between items-center inline-flex">
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
              +1-202-555-0178
            </div>
          </div>
          <div className="justify-center items-center gap-3 flex">
            <img className="w-6 h-4" src="https://via.placeholder.com/24x16" />
            <div className="self-stretch justify-center items-center gap-1 inline-flex">
              <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                English
              </div>
              <div className="w-4 h-4 relative"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[90px] px-[150px] py-5 bg-white justify-between items-center inline-flex">
        <div className="justify-center items-center gap-8 flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-10 h-10 relative"></div>
            <div className="text-zinc-900 text-2xl font-semibold font-['Inter'] leading-10">
              Jobpilot
            </div>
          </div>
          <div className="pl-6 pr-[252px] py-[9px] bg-white rounded-[5px] border border-zinc-200 justify-start items-center flex">
            <div className="self-stretch justify-center items-center gap-5 inline-flex">
              <div className="justify-center items-center gap-3 flex">
                <img
                  className="w-6 h-4"
                  src="https://via.placeholder.com/24x16"
                />
                <div className="text-zinc-900 text-sm font-medium font-['Inter'] leading-tight">
                  Tirana
                </div>
                <div className="w-4 h-4 justify-center items-center flex">
                  <div className="w-4 h-4 relative"></div>
                </div>
              </div>
              <div className="w-8 h-[0px] origin-top-left rotate-90 border border-zinc-200"></div>
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
              Post a Jobs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
