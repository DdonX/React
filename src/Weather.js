const Weather = () => {
    return ( 
<section className="min-h-screen bg-[#b2bfeb] text-[#1e1e1e]">
    <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10">
    <section className="w-full rounded-3xl border border-[#939dbb] bg-[#9dacd9] p-6 shadow-2xl md:p-8">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#cb0606]">Weather App</p>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Check the Weather</h1>
        <p className="mt-3 text-sm text-[#555] md:text-base">
          Search for a city to get the weather
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="cityInput"
          type="text"
          placeholder="Enter city name"
          className="w-full rounded-2xl border border-[#cccbbf] bg-[#faf9f6] px-4 py-3 text-[#1e1e1e] placeholder:text-[#888] outline-none ring-0 transition focus:border-[#2c2c2c]"
        />
        <button
          id="searchBtn"
          type="button"
          className="rounded-2xl bg-[#2c2c2c] px-6 py-3 font-bold text-white transition hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
        >
          Search
        </button>
      </div>

      <p id="status" className="mt-4 text-sm text-[#555]">Enter a city to get started.</p>

      <div className="mt-6 rounded-2xl border border-[#cccbbf] bg-[#faf9f6] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1e1e1e]">Weather Result</h2>
          <span className="rounded-full bg-[#559a62] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1e1e1e]">
            Live Data
          </span>
        </div>

        <div id="weatherResult" className="space-y-3 text-[#333]">
          <p className="text-[#888]">No weather data yet.</p>
        </div>
      </div>
    </section>
  </main>

</section>
     );
}
 
export default Weather;