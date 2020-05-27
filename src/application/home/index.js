import React from 'react';
import { renderRoutes } from 'react-router-config';
import * as css from './home.module.less';
import { NavLink } from 'react-router-dom';

function Home(props) {
  return (
    <>
      <div className={css.navbar}>
        <span className="iconfont menu">&#xe65c;</span>
        <span className={css.title}>Cloud Music</span>
        <span className="iconfont search">&#xe62b;</span>
      </div>
      <div className={css.tabBar}>
        <NavLink to="/recommend" className={css.tabButton} activeClassName={css.selected}><span>推荐</span></NavLink>
        <NavLink to="/singers" className={css.tabButton} activeClassName={css.selected}><span>歌手</span></NavLink>
        <NavLink to="/rank" className={css.tabButton} activeClassName={css.selected}><span>排行榜</span></NavLink>
      </div>
      <div className={css.routeContainer}>
        {renderRoutes(props.route.routes)}
      </div>
    </>
  );
}

export default React.memo(Home);