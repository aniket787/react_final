// import React from 'react';
// import ReactDOM from 'react-dom';

// const name = 'Aniket';
// const img1 = "https://picsum.photos/600/500"
// const img2 = "https://picsum.photos/200/500"

// const linkss = "https://www.linkedin.com/mynetwork/"

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true"> My name is {name} </h1>

//     <img src={img1}  />
//     <img src={img1}  />
//     <a href={linkss} >
//     <img src={img1}  />
// </a>
//   </>
//   , document.getElementById('root')
// );



















import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';

ReactDOM.render(
  <>
    <Heading />
    <Paragraph/>
    <List />
  </>
  , document.getElementById('root')
);
