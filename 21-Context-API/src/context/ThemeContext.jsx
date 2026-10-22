import React, { createContext, useState } from 'react'

export const Themedatacontext = createContext()

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light');

  return (
    <div>
        <Themedatacontext.Provider value={[theme,setTheme]} >
            {props.children}
        </Themedatacontext.Provider>
    </div>
  )
}

export default ThemeContext
