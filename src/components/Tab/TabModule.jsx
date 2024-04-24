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
        <TabButton onSelect={() => handleSelect('tab1')}>Tab 1</TabButton>
        <TabButton onSelect={() => handleSelect('tab2')}>Tab 2</TabButton>
        <TabButton onSelect={() => handleSelect('tab3')}>Tab 3</TabButton>
        <TabButton onSelect={() => handleSelect('tab4')}>Tab 4</TabButton>
      </ul>
      <div id="tab-content">
          <h3>{TabData[selectTopic].title}</h3>
          <p>{TabData[selectTopic].description}</p>
      </div>
    </div>
  )
}
