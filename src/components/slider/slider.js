import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import * as css from './slider.module.less';

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState();
  const { bannerList } = props;

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(`.${css.sliderContainer}`, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(newSliderSwiper);
    }
    console.log(1)
    return () => {
      console.log(2)
    }
  }, [bannerList.length, sliderSwiper]);
  console.log(0)
  return (
    <div className={css.sliderContainer}>
      <div className="swiper-wrapper">
        {
          bannerList.map(slider => {
            return (
              <div className="swiper-slide" key={slider.imageUrl}>
                <div className="slider-nav">
                  <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                </div>
              </div>
            );
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default React.memo(Slider);