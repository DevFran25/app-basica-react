import logo from "@/assets/images/logo.png";

export default function Logo() {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
        <img
          src={logo}
          alt="VotApp logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
