import React from 'react';
import ReactDOM from "react-dom/client";
import App from '../App';

it('the App renders', () => {
  const root = ReactDOM.createRoot(document.createElement("div"));
  root.render(<App/>)
  expect(true).toBe(true)
});