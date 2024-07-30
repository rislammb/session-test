import { useEffect, useState } from 'react';
import {
  browserName,
  browserVersion,
  deviceType,
  osName,
  osVersion,
} from 'react-device-detect';
import './App.css';
import Test from "./components/test";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.ipdata.co/?api-key=${import.meta.env.VITE_API_PRIMARY_KEY}`
    )
      .then((res) => res.json())
      .then((jsonData) => setApiData(jsonData))
      .catch((error) => console.log('Error: ', error));
  }, []);

  console.log({ browserName, browserVersion, deviceType, osName, osVersion });

  return (
    <div>
      <h1>
        <img
          src='https://www.pamifactura.com/_next/image?url=%2Fassets%2FfacturaaPami.png&w=256&q=75'
          alt='Pami Factura'
          width='170'
        />
      </h1>
      <Test />
      <ul className='list'>
        <li>Browser: {browserName}</li>
        <li>Browser Version: {browserVersion}</li>
        <li>Operating System: {osName}</li>
        <li>OS Version: {osVersion}</li>
        <li>Device Type: {deviceType}</li>
        <li>Window Width: {window.innerWidth}</li>
        <li>Window Height: {window.innerHeight}</li>
        <li>
          Browser Language:{' '}
          {window.navigator.language || window.navigator.userLanguage}
        </li>
        <li>Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</li>
      </ul>

      <ul className='list'>
        <li>IP Address: {apiData?.ip}</li>
        <li>Country Code: {apiData?.country_code}</li>
        <li>Country: {apiData?.country_name}</li>
        <li>Region: {apiData?.region}</li>
        <li>City: {apiData?.city}</li>
        <li>Latitude: {apiData?.latitude}</li>
        <li>Longitude: {apiData?.longitude}</li>

        <li>User Agent: {window.navigator.userAgent}</li>
        <li>Vendor: {window.navigator.vendor}</li>
        <li>Device Width: {screen.width}</li>
        <li>Device Height: {screen.height}</li>
        <li>Color Depth: {screen.colorDepth}</li>
      </ul>
    </div>
  );
}

export default App;
