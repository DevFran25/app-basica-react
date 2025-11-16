
export default function Header({ title }) {
  return (
    <div className="mb-4 w-full flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
          {title}
        </h1>
        <div className="bg-orange-500 text-white rounded-lg shadow px-5 py-2 w-64 sm:w-80 md:w-[1000px] text-center">
          <h2 className="text-sm sm:text-base md:text-lg font-bold">
            ¡Localiza tu mesa y planifica el día!
          </h2>
        </div>
      </div>
    </div>
  );
}
