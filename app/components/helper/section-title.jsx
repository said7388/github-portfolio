// @flow strict


function SectionTitle({ title }) {
  return (
    <div className="flex justify-center -mt-6">
      <div className="flex  items-center h-12">
        <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></span>
        <span className="bg-[#1a1443] w-fit text-white p-2 px-3 md:px-6 text-base md:text-xl rounded-md">
          {title}
        </span>
        <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></span>
      </div>
    </div>
  );
};

export default SectionTitle;