import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-br from-[#396849] to-[#187e5f] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon
        className="h-24 w-24 animate-bounce text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        AIvern is actually asking the forest God about the Weather
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, AIvern is thinking is about to finish!
      </h2>
    </div>
  );
}

export default Loading;
