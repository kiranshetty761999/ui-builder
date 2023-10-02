import { useState } from 'react';
import './App.css';
import json from './test.json'
import FormGenerator from './FormGenerator'

function App() {
  const [values, setValues] = useState(json)

  const nestedChildren = (data, key, value) => {
    const changeNested = data.children.map((childItem, index) => {
      if (childItem.key === key) {
        return {
          ...childItem,
          value: value
        };
      }
      else if (childItem.children?.length > 0)
        return nestedChildren(childItem, key, value)

      else {
        return {
          ...childItem
        };
      }


    });

    return {
      ...data,
      children: changeNested
    };
  };




  const handleChange = (data, value) => {

        const changedFormPart = values.uiInfo.map((section, index) => {
          if (index === data.formIndex) {
            return nestedChildren(section, data.data.key, value)
          }
          else {
            return {
              ...section
            }
          }
        })

    setValues({
      uiInfo:changedFormPart
    })

  }
  
  return (
    <div >
          {values.uiInfo.map((item,index) => (<FormGenerator data={item}  change={handleChange} formIndex={index} />))}
    </div>
  );
}

export default App;
