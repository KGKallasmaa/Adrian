import React from 'react'
import './main.css'

import AdrianEditor from '../../components/editor'



export const MainPage = () => {
  return (
    <div className={"container-fluid main-page  h-100"}>
      <div className="row h-100">
        <div className="col h-100">
          <div className="colContentWrapper">
            <AdrianEditor content={"<p>hello world</p>"}/>
          </div>
        </div>
        <div className="col h-100">
          <div className="colContentWrapper">
            One of three columns
          </div>
        </div>
      </div>
    </div>
  );
}
