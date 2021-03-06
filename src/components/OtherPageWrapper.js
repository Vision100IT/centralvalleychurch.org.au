import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //eslint-disable-line

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';


//import OurPeople from './pages/OurPeople';

import ContactUs from './pages/ContactUs';

import GenericAPIPage from './pages/GenericAPIPage';
import Events from './pages/Events';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Events" component={Events} />

          <Route exact path="/:slug" component={GenericAPIPage} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;


