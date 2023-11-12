function App() {
  return (
    <>
      <div className="w-full h-[794px] relative bg-gray-100 bg-opacity-60">
        <div className="left-[100px] top-[109px] absolute flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[652px] text-zinc-900 text-[56px] font-medium font-['Inter'] leading-[64px]">
              Find a job that suits your interest & skills.
            </div>
            <div className="w-[536px] text-gray-500 text-lg font-normal font-['Inter'] leading-7">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="p-3 bg-white rounded-lg shadow border border-zinc-200 justify-start items-center gap-3 inline-flex">
              <div className="justify-center items-center flex">
                <div className="w-72 pl-[18px] pr-[78px] py-4 bg-white rounded-[5px] justify-start items-start gap-3 flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <img src="\public\images\fi_search.svg" />
                  </div>
                  <div className="text-gray-400 text-base font-normal font-['Inter'] leading-normal">
                    Job tittle, Keyword...
                  </div>
                </div>
                <div className="w-8 h-[0px] origin-top-left rotate-90 border border-zinc-200"></div>
                <div className="w-56 pl-[18px] pr-[66px] py-4 bg-white rounded-[5px] justify-start items-start gap-3 flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <img src="public\images\fi_map-pin.svg" />
                  </div>
                  <div className="text-gray-400 text-base font-normal font-['Inter'] leading-normal">
                    Your Location
                  </div>
                </div>
              </div>
              <div className="px-8 py-4 bg-blue-700 rounded justify-center items-center gap-3 flex">
                <div className="text-white text-base font-semibold font-['Inter'] capitalize leading-normal">
                  Find Job
                </div>
              </div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                Suggestion:
              </div>
              <div className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Designer,
              </div>
              <div className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Programing,
              </div>
              <div className="text-center text-blue-700 text-sm font-medium font-['Inter'] leading-tight">
                {" "}
                Digital Marketing,
              </div>
              <div className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Video,
              </div>
              <div className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Animation.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-[109px]  ">
          <img src="/images/logo.png"></img>
        </div>
        <div className="w-full h-28 px-[100px] pt-[100px] justify-between items-center inline-flex">
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 flex">
            <div className="p-4 bg-sky-100 rounded justify-start items-start gap-2.5 flex">
              <div className="w-10 h-10 relative">
                <img src="\public\images\briefcase-duotone 1.svg" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="w-[180px] text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                1,75,324
              </div>
              <div className="w-[180px] text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Live Job
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg shadow justify-start items-center gap-5 flex">
            <div className="p-4 bg-blue-700 rounded justify-start items-start gap-2.5 flex">
              <div className="w-10 h-10 relative">
                <img src="\public\images\buildings-duotone 1.svg" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="w-[180px] text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                97,354
              </div>
              <div className="w-[180px] text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Companies
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 flex">
            <div className="p-4 bg-sky-100 rounded justify-start items-start gap-2.5 flex">
              <div className="w-10 h-10 relative">
                <img src="public\images\users-duotone 1.svg" />{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="w-[180px] text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                38,47,154
              </div>
              <div className="w-[180px] text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Candidates
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 flex">
            <div className="p-4 bg-sky-100 rounded justify-start items-start gap-2.5 flex">
              <div className="w-10 h-10 relative">
                <img src="\public\images\briefcase-duotone 1.svg" />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="w-[180px] text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                7,532
              </div>
              <div className="w-[180px] text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                New Jobs
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
