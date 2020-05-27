import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from "react";
import BScroll from 'better-scroll';
import * as css from './scroll.module.less';

const Scroll = forwardRef((props, ref) => {
  //better-scroll 实例对象
  const [bScroll, setBScroll] = useState();
  //current 指向初始化 bs 实例需要的 DOM 元素
  const scrollContaninerRef = useRef();

  const { onScroll } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: props.direction === "horizontal",
      scrollY: props.direction === "vertical",
      probeType: 3,
      // observeDOM: false,
      click: props.click,
      bounce: {
        top: props.bounceTop,
        bottom: props.bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) { return; }
    bScroll.on('scroll', (ev) => {
      onScroll(ev);
    });
  }, [bScroll, onScroll]);

  useEffect(() => {
    if (props.refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useEffect(() => {
    if (!bScroll || !props.pullUp) { return; }
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        props.pullUp.call(null);
      }
    });
    return () => {
      bScroll.off('scrollEnd');
    };
  }, [props.pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !props.pullDown) { return; }
    bScroll.on('touchEnd', (pos) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        props.pullDown.call(null);
      }
    });
    return () => {
      bScroll.off('touchEnd');
    };
  }, [props.pullDown, bScroll]);

  // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
  useImperativeHandle(ref, () => ({
    // 给外界暴露 refresh 方法
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBScroll() {
      return bScroll;
    }
  }));

  return (
    <div ref={scrollContaninerRef} className={css.scrollContainer}>
      {props.children}
    </div>
  );
});

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};

export default Scroll;
