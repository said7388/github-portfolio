// @flow strict

import GitHubCalendar from "react-github-calendar";


function Contributions() {
  return (
    <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -mt-6">
        <div className="flex  items-center h-12">
          <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-3 md:px-6 text-xl rounded-md">
            Contributions Calendar
          </span>
          <span className="w-20 h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></span>
        </div>
      </div>

      <div className="w-full flex justify-center py-12">
        <GitHubCalendar
          username="said7388"
          blockSize={14}
        />
      </div>

    </div>
  );
};

export default Contributions;