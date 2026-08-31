import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = ["about", "experience", "education", "skills", "projects", "contact"];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const go = (id) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <header className="navbar sticky top-0 z-50 border-b border-base-300/70 bg-base-100/90 px-4 backdrop-blur md:px-8">
    <div className="mx-auto flex w-full max-w-7xl items-center">
      <button className="btn btn-ghost px-2 text-xl font-extrabold" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>HB<span className="text-primary">.</span></button>
      <nav className="ml-auto hidden items-center gap-1 lg:flex">{links.map((x)=><button key={x} onClick={()=>go(x)} className="btn btn-ghost btn-sm capitalize">{x}</button>)}</nav>
      <button className="btn btn-ghost btn-circle ml-2" onClick={onToggleTheme} aria-label="Toggle color theme">{theme === "portfolio" ? <Moon size={20}/> : <Sun size={20}/>}</button>
      <button className="btn btn-ghost btn-circle lg:hidden" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button>
    </div>
    {open && <div className="fixed inset-0 z-50 flex min-h-screen flex-col bg-base-100 p-6 lg:hidden"><button className="btn btn-ghost btn-circle ml-auto" onClick={()=>setOpen(false)}><X/></button><div className="mt-12 flex flex-col gap-3">{links.map((x)=><button key={x} onClick={()=>go(x)} className="btn btn-ghost justify-start text-2xl capitalize">{x}</button>)}</div></div>}
  </header>;
}
