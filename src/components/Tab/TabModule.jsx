import React, { useState } from 'react';
import TabData from './TabData';
import TabButton from './TabButton';

export const TabModule = () => {

  const [selectTopic, setselectTopic] = useState('tab1');
 
  function handleSelect(selectedButton) {    
    setselectTopic(selectedButton);    
  }

  return (
    <div className="tab-wrap">      
      <ul className="tab-btns">
        <TabButton className={selectTopic === 'tab1' ? "active" : undefined} onClick={() => handleSelect('tab1')}>Tab 1</TabButton>
        <TabButton className={selectTopic === 'tab2' ? "active" : undefined} onClick={() => handleSelect('tab2')}>Tab 2</TabButton>
        <TabButton className={selectTopic === 'tab3' ? "active" : undefined} onClick={() => handleSelect('tab3')}>Tab 3</TabButton>
        <TabButton className={selectTopic === 'tab4' ? "active" : undefined} onClick={() => handleSelect('tab4')}>Tab 4</TabButton>
      </ul>
      <div id="tab-content">
          <h3>{TabData[selectTopic].title}</h3>
          <p>{TabData[selectTopic].description}</p>
      </div>
    </div>
  )
}
