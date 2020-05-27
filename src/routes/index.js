import React from 'react';
import { Redirect } from "react-router-dom";
import Album from '../application/album';
import Home from '../application/home';
import Rank from '../application/rank';
import Recommend from '../application/recommend';
import Singers from '../application/singers';
import Singer from '../application/singer';

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
        component: Recommend,
        routes: [
          {
            path: "/recommend/:id",
            component: Album
          }
        ]
      },
      {
        path: "/singers",
        component: Singers,
        routes: [
          {
            path: "/singers/:id",
            component: Singer
          }
        ]
      },
      {
        path: "/rank",
        component: Rank,
        routes: [
          {
            path: "/rank/:id",
            component: Album
          }
        ]
      }
    ]
  }
];