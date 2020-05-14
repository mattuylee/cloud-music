import React from 'react';
import { renderRoutes } from 'react-router-config';
import * as css from './home.module.less';
import { NavLink } from 'react-router-dom';

function Home(props) {
  return (
    <>
    <div className={css.navbar}>
        <i className="iconfont icon-menu"></i>
        <span className={css.title}>Cloud Music</span>
        <i className="iconfont icon-search"></i>
    </div>
    <div className={css.tabBar}>
      <NavLink to="/recommend" className={css.tabButton} activeClassName={css.selected}><span>推荐</span></NavLink>
      <NavLink to="/singers" className={css.tabButton} activeClassName={css.selected}><span>歌手</span></NavLink>
      <NavLink to="/rank" className={css.tabButton} activeClassName={css.selected}><span>排行榜</span></NavLink>
    </div>
    {renderRoutes(props.route.routes)}
    </>
  );
}

export default React.memo(Home);