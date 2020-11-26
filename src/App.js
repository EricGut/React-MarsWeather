import { useEffect, useState } from "react";
import DayInfoItem from "./components/DayInfoItem";
import DayInfoModal from "./components/DayInfoModal";
import Loading from "./components/Loading";

function App() {

  const [dayInfoModal, setDayInfoModal] = useState(null)
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
      const resWeather = await data.json();
      const sols = resWeather.sol_keys;
      let days = []
      sols.map(day => {
        const solDay = resWeather[day]
        solDay.sol = day;
        return days.push(solDay)
      });
      setWeather(days);
      setLoading(false)
    }
    fetchData()

  }, [])
  console.log(weather);
  return (
    <div className="app">
      <div className="container">
        {
          dayInfoModal && <DayInfoModal dayInfo={dayInfoModal} onClick={() => setDayInfoModal(null)} />
        }
        <div className="app__content">
          <h1 className="title">Latest Weather at <p>Mars</p></h1>
          <div className="days__flex">
            {
              loading ? <Loading /> : weather.map((dayInfo) => {
                return <DayInfoItem key={dayInfo.sol} dayInfo={dayInfo} onClick={() => setDayInfoModal(dayInfo)} />
              })
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
