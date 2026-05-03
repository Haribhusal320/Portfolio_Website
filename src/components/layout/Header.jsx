import Nav from "./Nav";

function Header() {
  return (
    <nav className="flex font-medium text-3xl bg-neutral text-neutral-content w-full justify-between p-5 shadow-xl mr-2">
      Hari Bhusal
      <Nav />
    </nav>
  );
}

export default Header;
