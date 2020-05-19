import React from 'react';
import * as css from './loading.module.less';

function Loading(props) {
  if (!props.enabled) { return null; }
  return (
    <div className={css.loadingContainer}>
      <div></div>
      <div></div>
    </div>
  );
}
Loading.defaultProps = {
  enabled: true
};

export default React.memo(Loading);