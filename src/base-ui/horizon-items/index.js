import React from 'react';
import Scroll from '../scroll';
import * as css from './index.module.less';

function HorizonItems(props) {
  const { list, onSelect, title, className, style, selected } = props;

  return (
    <div className={css.container + ' ' + className} style={style}>
      <Scroll direction="horizontal">
        <ul className="list">
          <span className="title">{title}</span>
          {list.map(item => (
            <li key={item.key || item.value}
              className={selected === item ? 'selected' : ''}
              onClick={() => onSelect && onSelect(item)}>
              {item && (item.value || item)}
            </li>
          ))}
        </ul>
      </Scroll>
    </div>
  );
}

export default React.memo(HorizonItems);
