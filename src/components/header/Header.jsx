import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
  return (
    <div className="flex h-20 bg-gray-500 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Ola</span>
      <h1 className="text-gray-100 text-xl">Newsletter</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
