import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import * as css from './slider.module.less';

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState();
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(`.${css.slider}`, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <div className={css.slider}>
      <div className="swiper-wrapper">
        {bannerList.map(slider => (
          <div className="swiper-slide" key={slider.imageUrl}>
            <div className="slider-nav">
              <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default React.memo(Slider);