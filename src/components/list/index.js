import React from 'react';
import { getCount } from '../../api/util';
import * as css from './list.module.less';

function RecommendList(props) {
  const { recommendList } = props
  return (
    <>
      <label className={css.label}>推荐歌单</label>
      <ul className={css.list}>
        {recommendList.map((item) => (
          <li key={item.id} className="list-item">
            <div className="image-wraper">
              <img src={item.picUrl + '?param=300x300'} width="100%" height="100%" alt="推荐歌单" />
              <div className="decorate"></div>
            </div>
            <p className="description">{item.name}</p>
            <span className="play-count">
              <i className="iconfont icon-headset"></i>
              {getCount(item.playCount)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(RecommendList);