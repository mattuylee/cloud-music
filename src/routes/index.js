import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/home';
import Rank from '../application/rank';
import Recommend from '../application/recommend';
import Singers from '../application/singers';

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"} />
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]