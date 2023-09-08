import { useState } from "react";
import "./App.css";

function App() {
  const [BE, setBE] = useState(400);
  const [M, setM] = useState(65000); // MTOW of A220-100
  const [BM, setBM] = useState(10000);
  const [PE, setPE] = useState(0.8);
  const [LD, setLD] = useState(25);

  // convert Wh to Joules: 3600 J in 1 Wh
  const R = (BE * 3600 * (BM / M) * (1 / 9.807) * LD * PE) / 1000; // convert m to km
  const KM_TO_MILES = 0.62137;
  const routes = [
    {
      name: "Jeju - Seoul",
      distance: 449,
    },
    {
      name: "Sapporo - Tokyo",
      distance: 835,
    },
    {
      name: "Sydney - Melbourne",
      distance: 705,
    },
    {
      name: "Fukuoka - Tokyo",
      distance: 889,
    },
    {
      name: "Mumbai - Delhi",
      distance: 1150,
    },
    {
      name: "Hanoi - Ho Chi Minh City",
      distance: 1171,
    },
    {
      name: "Beijing -  Shanghai",
      distance: 1081,
    },
    {
      name: "Hong Kong - Taipei",
      distance: 802,
    },
    {
      name: "Tokyo - Naha",
      distance: 1573,
    },
    {
      name: "Jakarta - Surabaya",
      distance: 700,
    },
  ];

  const reachableRoutes = routes.filter((route) => route.distance <= R).length;
  const totalEnergyKwh = (BE * BM) / 1000;

  return (
    <div className="app">
      <h1>Electric aircraft range calculator</h1>

      <p>
        This calculator is based on prior work by{" "}
        <a href="https://lochief.wordpress.com/2015/08/04/how-the-musk-electric-jet-works/">
          Lochie Ferrier
        </a>
        .
      </p>

      <pre>
        R = E<sup>*</sup> m<sub>batt</sub>/m 1/g L/D η
      </pre>
      <p>
        Default mass is MTOW (maximum takeoff weight) of an A220-100 (100 PAX)
      </p>
      <hr />
      <label>
        <div>Battery energy (Wh/kg):</div>
        <input
          type="number"
          value={BE}
          onChange={(e) => setBE(e.target.value)}
        />
        <button onClick={(e) => setBE(260)}>Panasonic 2170</button>
        <button onClick={(e) => setBE(400)}>Tesla 4680</button>
        <button onClick={(e) => setBE(500)}>CATL Condensed Matter</button>
      </label>
      <label>
        <div>Laden mass (kg):</div>
        <input type="number" value={M} onChange={(e) => setM(e.target.value)} />
      </label>
      <label>
        <div>Battery mass (kg):</div>
        <input
          type="number"
          value={BM}
          onChange={(e) => setBM(e.target.value)}
        />
      </label>
      <label>
        <div>Propulsion efficiency:</div>
        <input
          type="number"
          value={PE}
          onChange={(e) => setPE(e.target.value)}
        />
      </label>
      <label>
        <div>Lift to drag ratio:</div>
        <input
          type="number"
          value={LD}
          onChange={(e) => setLD(e.target.value)}
        />
      </label>
      <hr />
      <label>
        <div>Battery mass fraction:</div>
        <input readOnly value={(BM / M).toFixed(3)} />
      </label>
      <label>
        <div>Remaining mass after battery (kg):</div>
        <input readOnly value={M - BM} /> (A220-100 empty weight is 37000 kg)
      </label>
      <label>
        <div>Energy (kWh):</div>
        <input readOnly value={totalEnergyKwh.toFixed(1)} />
      </label>
      <label>
        <div>Range (km):</div>
        <input readOnly value={R.toFixed(1)} />
      </label>
      <label>
        <div>Range (miles):</div>
        <input readOnly value={(R * KM_TO_MILES).toFixed(1)} />
      </label>
      <p>
        Busiest air routes [
        <a href="https://en.wikipedia.org/wiki/List_of_busiest_passenger_air_routes">
          1
        </a>
        ]
      </p>
      <ol>
        {routes.map((route) => (
          <li
            className={`${route.distance <= R ? "reachable" : "not-reachable"}`}
            key={route.name}
          >
            {route.name}: {route.distance} km
          </li>
        ))}
      </ol>
      <div>
        {((reachableRoutes / routes.length) * 100).toFixed(0)}% of top 10 routes
        are reachable
      </div>
    </div>
  );
}

export default App;
