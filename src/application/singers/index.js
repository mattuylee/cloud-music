import React, { useRef, useEffect } from 'react';
import Horizen from '../../base-ui/horizon-items/index';
import { categoryTypes, alphaTypes } from '../../api/config';
import {
  NavContainer,
  ListContainer,
  List,
  ListItem,
  EnterLoading
} from "./style";
import { connect } from 'react-redux';
import { getSingerList, changeCategory, changeAlpha, getHotSingerList, changeListOffset, refreshMoreSingerList, changePullUpLoading, changePullDownLoading, refreshMoreHotSingerList } from './store/action-creators';
import Scroll from "../../base-ui/scroll/index";
import Loading from '../../base-ui/loading/index';
import { renderRoutes } from 'react-router-config';

function Singers(props) {
  const scrollRef = useRef(null);
  const { singerList, category, alpha, pageCount, songsCount, pullUpLoading, pullDownLoading, enterLoading } = props;
  const { getHotSinger, updateCategory, updateAlpha, pullUpRefresh, pullDownRefresh } = props;

  useEffect(() => {
    if (!singerList.length && !category && !alpha) {
      getHotSinger();
    }
    // eslint-disable-next-line
  }, []);

  const enterDetail = (id) => {
    props.history.push(`/singers/${id}`);
  };
  const handlePullUp = () => {
    pullUpRefresh(category === '', pageCount);
  };
  const handlePullDown = () => {
    pullDownRefresh(category && category.value, pageCount);
  };
  const handleUpdateCategory = (newVal) => {
    if (category === newVal) { return; }
    updateCategory(newVal);
    scrollRef.current.refresh();
  };
  const handleUpdateAlpha = (newVal) => {
    if (alpha === newVal) { return; }
    updateAlpha(newVal);
    scrollRef.current.refresh();
  };
  const renderSingerList = () => {
    const { singerList } = props;
    return (
      <List>
        {
          singerList.toJS().map((item, index) => {
            return (
              <ListItem key={item.accountId + "" + index} onClick={() => enterDetail(item.id)}>
                <div className="img_wrapper">
                  <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            );
          })
        }
      </List>
    );
  };

  return (
    <div>
      <NavContainer>
        <Horizen title={"分类(默认热门):"} list={categoryTypes} onSelect={(v) => handleUpdateCategory(v)} selected={category}></Horizen>
        <Horizen title={"首字母:"} list={alphaTypes} onSelect={(v) => handleUpdateAlpha(v)} selected={alpha}></Horizen>
      </NavContainer>
      <ListContainer play={songsCount}>
        <Scroll
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          ref={scrollRef}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
        >
          {renderSingerList()}
        </Scroll>
      </ListContainer>
      {/* 入场加载动画 */}
      {enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
      {renderRoutes(props.route.routes)}
    </div>
  );
}
const mapStateToProps = (state) => ({
  alpha: state.getIn(['singers', 'alpha']),
  category: state.getIn(['singers', 'category']),
  singerList: state.getIn(['singers', 'singerList']),
  enterLoading: state.getIn(['singers', 'enterLoading']),
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  pageCount: state.getIn(['singers', 'pageCount']),
  songsCount: state.getIn(['player', 'playList'])?.size
});
const mapDispatchToProps = (dispatch) => {
  return {
    getHotSinger() {
      dispatch(getHotSingerList());
    },
    updateCategory(newVal) {
      dispatch(changeCategory(newVal));
      dispatch(getSingerList());
    },
    updateAlpha(newVal) {
      dispatch(changeAlpha(newVal));
      dispatch(getSingerList());
    },
    // 滑到最底部刷新部分的处理
    pullUpRefresh(hot, count) {
      dispatch(changePullUpLoading(true));
      if (hot) {
        dispatch(refreshMoreHotSingerList());
      }
      else {
        dispatch(refreshMoreSingerList());
      }
    },
    //顶部下拉刷新
    pullDownRefresh(category, alpha) {
      dispatch(changePullDownLoading(true));
      dispatch(changeListOffset(0));
      if (category === '' && alpha === '') {
        dispatch(getHotSingerList());
      }
      else {
        dispatch(getSingerList());
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));