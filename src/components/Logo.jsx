import logo from "@/assets/images/logo.png";

export default function Logo() {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={logo}
          alt="VotApp logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
