import React from 'react';
import './Search.scss'

export default function Search({onChange, onKeyDown, onBlur}) {
    return (
        <div className="search-wrapper">
          <label htmlFor="city">
            <input type="text"
              name="city"
              placeholder="enter your city"
              onChange={onChange}
              onKeyDown={onKeyDown}
              onBlur={onBlur}
            />
          </label>
        </div>
    )
}
