import { Link } from "react-router-dom";

export default function FeatureCard({title,text,image,reverse,link}){

return(

<div className="grid md:grid-cols-2 gap-16 items-center py-28">

{!reverse && (
<img
src={image}
className="w-full max-w-lg rounded-xl shadow-lg"
/>
)}

<div>

<h2 className="text-3xl font-semibold mb-4">
{title}
</h2>

<p className="text-gray-600 leading-relaxed">
{text}
</p>

{link && (
<Link to={link}>
<button className="feature-button mt-6">
Try Detection
</button>
</Link>
)}

</div>

{reverse && (
<img
src={image}
className="w-full max-w-lg rounded-xl shadow-lg"
/>
)}

</div>

)

}