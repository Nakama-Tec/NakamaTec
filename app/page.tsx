import Image from "next/image";
import Error from "./Error404.png"

export default function Home() {
  
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 px-4">
  <div className="max-w-lg text-center">
    <Image 
      src={Error}
      alt="404" 
      className="w-full max-w-xs mx-auto relative top-8"
    />
    <h2 className="mt-6 text-3xl font-bold text-gray-800">Página en construcción</h2>
    <p className="mt-4 text-gray-600">
      Lo sentimos, la página que buscas no está disponible.
    </p>

    <button className="bg-red-600 mt-5 text-slate-200 border border-red-500 border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="shadow-slate-300 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Volvemos pronto!
</button>
  </div>
</div>

  )
}