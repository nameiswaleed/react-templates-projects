import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import ScrollToTop from "./hooks/ScrollToTop";

// const root = createRoot(document.getElementById('root'));
// root.render(
  //<React.StrictMode>
  <>    
  {/* <AppRouter/> */}
    {/* <Header/> */}
    {/* <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter> */}

    
    </>
//  </React.StrictMode>

// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
    {/* <ScrollToTop> */}
        <App />
      {/* </ScrollToTop> */}
      </>
  </React.StrictMode>
);
