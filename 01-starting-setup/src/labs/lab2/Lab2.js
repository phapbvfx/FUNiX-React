// import ReactDOM from "react-dom/client";
export const Lab2 = function () {
  return (
    <>
      {/* this is first comment in Jsx */}
      <h2 className="title">Lab2 created</h2>
    </>
  );
};
// Lab 2.1
export const JSX = <h1>Hello JSX!</h1>;

// Lab 2.2
export const JSX1 = (
  <div>
    {/**this is a comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
export const JSX2 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

// ReactDOM.render(JSX2, document.getElementById("challenge-node"));

export const JSX3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

export const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// lab 2.6

export const MyComponent = function () {
  // Change code below this line
  return <div className="customClass">MyComponent</div>;

  // Change code above this line
};

// lab 2.7
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* Change code below this line */}
      <TypesOfFruit />
      {/* Change code above this line */}
    </div>
  );
};
export const TypesOfFood = () => {
  return (
    <div>
      <h1>Types of Food:</h1>
      {/* Change code below this line */}
      <Fruits />

      {/* Change code above this line */}
    </div>
  );
};
// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         {/* Change code below this line */}
//         <Fruits />

//         {/* Change code above this line */}
//       </div>
//     );
//   }
// }
