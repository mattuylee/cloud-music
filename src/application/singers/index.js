import React, { useState } from 'react';
import HorizonItems from '../../base-ui/horizon-items';
import { alphaTypes, categoryTypes } from '../../api/config';
import * as css from './singers.module.less';

function Singers() {
  const [category, setCategory] = useState();
  const [alpha, setAlpha] = useState();

  return (
    <>
      <HorizonItems
        className={css.horizonItems} title="分类(默认热门):"
        list={categoryTypes}
        selected={category} onSelect={setCategory}
      />
      <HorizonItems
        className={css.horizonItems} title="首字母:"
        list={alphaTypes}
        selected={alpha} onSelect={setAlpha}
      />
    </>
  );
}

export default React.memo(Singers);