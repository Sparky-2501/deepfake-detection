import { Link } from "react-router-dom";

export default function Navbar(){

return(

<nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-transparent border-b border-gray-400">

<div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">

<Link to="/" className="text-2xl font-bold text-black-600">
DeepGuard
</Link>

<div className="flex gap-10 text-gray-700 font-medium">

<Link to="/">Home</Link>
<Link to="/features">Features</Link>
<Link to="/about">About</Link>

</div>

</div>

</nav>

)

}