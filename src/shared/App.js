
import React, { Component, useState, useEffect } from 'react';
import {Route, Switch}from 'react-router-dom';
import { Home, DownloadGuide, DownloadIcon, DownloadTemplet } from '../pages';

export default function App () {
    const [isLoading, setLoading] = useState(true);

    function fakeRequest() {
      return new Promise(resolve => setTimeout(() => resolve(), 3000));
    }
  
    useEffect(() => {
      fakeRequest().then(() => {
        const el = document.querySelector(".loader-container");
        if (el) {
          el.remove();
          setLoading(!isLoading);
        }
      });
    }, []);
  
    if (isLoading) {
      return null;
    }

    return (
        <div>

            <Route path="/" exact={true} component={Home} />
            <Switch>
              <Route path="/DownloadGuide" component={DownloadGuide} />
              <Route path="/DownloadIcon" component={DownloadIcon} />
              <Route path="/DownloadTemplet" component={DownloadTemplet} />

            </Switch>
        </div>
                    );
    
}

