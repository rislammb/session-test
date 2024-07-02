import {
  browserName,
  browserVersion,
  deviceType,
  osName,
  osVersion,
} from 'react-device-detect';

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div>
      <h1>Session fields</h1>

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
        <li>IP Address: {state?.query}</li>
        <li>Country Code: {state?.countryCode}</li>
        <li>Country: {state?.country}</li>
        <li>Region: {state?.regionName}</li>
        <li>City: {state?.city}</li>
        <li>Latitude: {state?.lat}</li>
        <li>Longitude: {state?.lon}</li>
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
