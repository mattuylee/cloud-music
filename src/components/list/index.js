import React from 'react';
import { getCount } from '../../api/util';
import * as css from './list.module.less';
import { withRouter } from 'react-router';

function RecommendList(props) {
  const { recommendList } = props;

  const enterDetail = function (id) {
    props.history.push(`/recommend/${id}`);
  };

  return (
    <>
      <label className={css.label}>推荐歌单</label>
      <ul className={css.list}>
        {recommendList.map((item) => (
          <li key={item.id} className="list-item" onClick={() => enterDetail(item.id)}>
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

export default React.memo(withRouter(RecommendList));
