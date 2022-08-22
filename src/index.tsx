import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Container maxWidth={false} style={
            {
              position: "absolute",
              display: "flex",
              width: '100vw',
              height: "100%",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              justifyContent:"center",
              backgroundImage: `url(https://images.igdb.com/igdb/image/upload/t_original/pk7xsuysk3ijkuavfyr5.jpg)`}
        }>
          <App />
      </Container>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
