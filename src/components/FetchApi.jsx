import React, { useEffect } from "react";
import { useState } from "react";
import "./FetchApi.css";

function FetchApi() {
  const [data, setData] = useState([]);
  const apiGet = () => {
    fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.texts);
        setData(json.texts);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
    
      <div className="videodiv">
        <video id="myvideo" autoPlay muted loop>
          <source
            class="active"
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
      {/* <h1>My API</h1> */}
      {/* <button onClick={apiGet}>Fetch API</button> */}
      <div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {data.map((item) => (
          <div className="outerdiv">
            <div className="apitexts">
              <h2>{item.heading}</h2>
              <h1>{item.subHeading}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchApi;
