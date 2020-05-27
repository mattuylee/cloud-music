import React, { useEffect } from 'react';
import { connect } from "react-redux";
import RecommendList from '../../components/list';
import Loading from '../../base-ui/loading';
import Scroll from '../../base-ui/scroll';
import Slider from '../../components/slider';
import * as actionTypes from './store/action-creators';
import * as css from './recommend.module.less';
import { renderRoutes } from 'react-router-config';


function Recommend(props) {
  const { bannerList, recommendList } = props;

  const { isLoading, getBannerDataDispatch, getRecommendListDataDispatch } = props;

  useEffect(() => {
    getBannerDataDispatch();
    getRecommendListDataDispatch();
    //eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <>
      <Scroll>
        <div className={css.scrollContent}>
          <div className={css.scrollMask}></div>
          <Loading enabled={isLoading}></Loading>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.getIn(['recommend', 'isLoading']),
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  };
};

// 将 ui 组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));
