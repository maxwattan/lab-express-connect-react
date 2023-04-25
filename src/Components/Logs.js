import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL
console.log(API, "Testing API");

function Logs() {
  const [Logs, setLogs] = useState([]);

  useEffect(() =>{
    axios
    .get(`${API}/Logs`)
      .then((response)=> setLogs(response.data))
    .catch((e)=>{console.error("catch", e)})
  }, [])


  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {Logs.map((log, index) => {
              return <Log key={index} Log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
