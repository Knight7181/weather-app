
const WeatherInput = ({apiKey, setApiKey, cities, setCities, onSubmit}) => {


  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  }

  const handleChange = (event) => {
    setCities(event.target.value);
  }

  const formSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    return false;
  };


  return (
    <form className="WeatherInput" onSubmit={formSubmit}>
      <input className="WeatherInputBox" type="text" placeholder="Enter Open Weather Map Api key" value={apiKey} onChange={handleApiKeyChange} required />
      <input className="WeatherInputBox" type="text" placeholder="Enter comma separated cities" value={cities} onChange={handleChange} required />
      <button className="WeatherInputSubmit" type="submit">Submit</button>
    </form>
  );
}

export default WeatherInput;
