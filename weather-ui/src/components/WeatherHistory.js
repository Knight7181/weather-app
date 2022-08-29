

const WeatherHistoryRow = ({data}) => {

  const {city, temp} = data;
  return (
    <tr className="WeatherHistoryRow">
      <td className="WeatherHistoryColumn">{city}</td>
      <td className="WeatherHistoryColumn">{temp}</td>
    </tr>
  );
}

const WeatherHistory = ({history}) => {

  return (
    <div className="WeatherHistory">
      <div className="WeatherRecentHistory">{'Recent History:'}</div>
      <table className="WeatherHistoryTable">
        <thead>
          <tr className="WeatherHistoryRow">
            <th className="WeatherHistoryColumn">{'City'}</th>
            <th className="WeatherHistoryColumn">{'Temperature'}</th>
          </tr>
        </thead>
        <tbody>
          {history.map((data, index) => <WeatherHistoryRow key={`${data.city}:${index}`} data={data} />)}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherHistory;
