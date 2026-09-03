import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('Enter a city to get started.');

  const API_KEY = 'ee362e72f7e307989dc7e1a67e5d1011';

  const fetchWeather = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    setWeatherData(null);
    setStatusMessage(`Searching for "${city}"...`);

    try {
      const response = await axios.get<WeatherData>('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          units: 'metric',
          appid: API_KEY,
        },
      });

      setWeatherData(response.data);
      setStatusMessage(`Showing current weather for ${response.data.name}.`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosErr = err as AxiosError<{ message?: string }>;

        if (axiosErr.response?.status === 404) {
          setError('City not found. Please check the spelling.');
        } else {
          setError(axiosErr.response?.data?.message || 'Failed to fetch weather data.');
        }
      } else {
        setError('An unexpected error occurred.');
      }
      setStatusMessage('Unable to retrieve weather.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#b2bfeb] text-[#1e1e1e]">
      <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-10">
        <section className="w-full rounded-3xl border border-[#939dbb] bg-[#9dacd9] p-6 shadow-2xl md:p-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em]">Weather App</p>
            <h1 className="text-4xl font-black">Check the Weather</h1>
            <p className="mt-3 text-sm text-[#555]">Search for a city to get the weather</p>
          </div>

          <form onSubmit={fetchWeather} className="flex flex-col gap-3 sm:flex-row">
            <input
              id="cityInput"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="w-full rounded-2xl border px-4 py-3"
            />
            <button
              id="searchBtn"
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-[#3c3c80] px-6 py-3 font-bold text-white"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>

          <p id="status" className="mt-4 text-sm text-[#555]">
            {statusMessage}
          </p>

          <div className="mt-6 rounded-2xl border bg-[#faf9f6] p-5">
            <h2 className="text-xl font-bold">Weather Result</h2>
            <div id="weatherResult" className="space-y-3 text-[#333]">
              {weatherData ? (
                <div className="space-y-2">
                  <h3 className="text-2xl font-black">
                    {weatherData.name}, {weatherData.sys.country}
                  </h3>
                  <p className="text-4xl font-extrabold text-[#1e1e1e]">
                    {Math.round(weatherData.main.temp)}°C
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#555]">
                    <p>
                      <strong>Condition: </strong>
                      {weatherData.weather[0]?.description}
                    </p>
                    <p>
                      <strong>Feels like: </strong>
                      {Math.round(weatherData.main.feels_like)}°C
                    </p>
                    <p>
                      <strong>Humidity: </strong>
                      {weatherData.main.humidity}%
                    </p>
                    <p>
                      <strong>Wind Speed: </strong>
                      {weatherData.wind.speed} m/s
                    </p>
                  </div>
                </div>
              ) : error ? (
                <p className="font-semibold text-red-600">{error}</p>
              ) : !loading ? (
                <p className="text-[#888]">No weather data yet.</p>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Weather;