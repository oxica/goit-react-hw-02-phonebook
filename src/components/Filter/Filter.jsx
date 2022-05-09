import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={s.filter}>
    <label className={s.labelFilter}>
      Filter
      <input type="name" value={value} onChange={onChange} className={ s.filterInput}/>
    </label>
  </div>
);

export default Filter;
