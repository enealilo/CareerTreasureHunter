export default function HeroBanner() {
  return (
    <>
      <div className="w-full h-full bg-gray-100 bg-opacity-60">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-start pl-40 pt-24">
            <div className="flex flex-col justify-start pr-28">
              <p className=" text-zinc-900 text-[56px] font-medium font-['Inter'] leading-[64px] ">
                Find a job that suits <br></br>your interest & skills.
              </p>
              <p className="text-gray-500 text-lg font-normal font-['Inter'] pt-6 pb-8 ">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam<br></br>
                in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
            </div>
            <div className="w-full h-20 bg-white rounded-lg shadow border border-zinc-200 justify-start items-center gap-3 inline-flex">
              <div className="flex flex-row">
                <div className="bg-white flex flex-row p-3 ">
                  <img
                    src="\images\fi_search.svg"
                    className="w-6 h-6 ml-4 mr-2 relative flex-col justify-start items-start flex"
                  />
                  <p className="text-gray-400 text-base font-normal font-['Inter'] leading-normal ">
                    Job tittle, Keyword...
                  </p>
                </div>
                <div className="bg-white flex flex-row p-3">
                  <img
                    src="\images\fi_map-pin.svg"
                    className="w-6 h-6 ml-4 mr-2 relative flex-col justify-start items-start flex"
                  />
                  <p className="text-gray-400 text-base font-normal font-['Inter'] leading-normal ">
                    Your location
                  </p>
                </div>
                <div className="flex ml-20">
                  <div className="w-[131px] h-14 px-8 py-4 bg-blue-700 rounded justify-center items-center  inline-flex">
                    <div className="text-white text-base font-semibold font-['Inter'] capitalize leading-normal">
                      Find Job
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row pt-6">
              <p className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-tight">
                Suggestion:
              </p>
              <p className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Designer,
              </p>
              <p className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Programing,
              </p>
              <p className="text-center text-blue-700 text-sm font-medium font-['Inter'] leading-tight">
                {" "}
                Digital Marketing,
              </p>
              <p className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Video,
              </p>
              <p className="text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">
                {" "}
                Animation.
              </p>
            </div>
          </div>
          <div className="pt-20 pb-6 relative ">
            <img className="w-[600px] h-[400px] " src="\images\logo.png" />
          </div>
        </div>
        <div className="justify-between items-center inline-flex pl-40 pb-24 gap-9">
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 inline-flex ">
            <div className="flex flex-row gap-5">
              <div className="p-4 bg-sky-100 rounded justify-start items-start gap-2.5 flex">
                <img
                  src="\images\briefcase-duotone 1.svg"
                  className="w-10 h-10 relative"
                />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex pr-8">
                <div className="w-full text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                  1,75,324
                </div>
                <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  Live Job
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 inline-flex ">
            <div className="flex flex-row gap-5">
              <div className="p-4 bg-blue-700 rounded justify-start items-start gap-2.5 flex">
                <img
                  src="\images\buildings-duotone 1.svg"
                  className="w-10 h-10 relative"
                />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex pr-8">
                <div className="w-full text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                  97,354
                </div>
                <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  Companies
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 inline-flex ">
            <div className="flex flex-row gap-5">
              <div className="p-4 bg-sky-100 rounded justify-start items-start gap-2.5 flex">
                <img
                  src="\images\users-duotone 1.svg"
                  className="w-10 h-10 relative"
                />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex pr-8">
                <div className="w-full text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                  38,47,154
                </div>
                <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  Cantidates
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="p-5 bg-white rounded-lg justify-start items-center gap-5 inline-flex ">
            <div className="flex flex-row gap-5">
              <div className="p-4 bg-sky-100 rounded justify-start items-start gap-2.5 flex">
                <img
                  src="\images\briefcase-duotone 1.svg"
                  className="w-10 h-10 relative"
                />
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex pr-8">
                <div className="w-full text-zinc-900 text-2xl font-medium font-['Inter'] leading-loose">
                  7,532
                </div>
                <div className="w-full text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                  New Jobs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
