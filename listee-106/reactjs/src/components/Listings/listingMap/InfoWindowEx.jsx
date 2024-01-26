import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { InfoWindow } from "google-maps-react";

export default function InfoWindowEx (props) {
  const [state,setState] = useState({
    infoWindowRef :React.createRef(),
    contentElement : document.createElement(`div`),
  })

  useEffect(()=>{
    if(props){
    ReactDOM.render(
      React.Children.only(props.children),
      state.contentElement
    );
    state.infoWindowRef.current.infowindow.setContent(state.contentElement);
    }
  },[props, state.contentElement, state.infoWindowRef])


    return <InfoWindow ref={state.infoWindowRef} {...props} />;
  }