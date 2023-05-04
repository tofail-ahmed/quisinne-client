import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
      return (
            <Container>
                  <div className='my-3'>
                        <h2> Q1:What is the difference between uncontrolled and controlled components?</h2>
                        <h4>Ans:In React, controlled components are components whose state is controlled by React, while uncontrolled components are components whose state is controlled by the browser.

                              In controlled components, the component's state is managed through the component's props, and any changes to the state are handled by the component's event handlers. This means that the component's state is always in sync with the application's state.

                              In uncontrolled components, the component's state is managed by the browser, and changes to the state are handled through the component's DOM elements. This means that the component's state may not always be in sync with the application's state, and it may be difficult to update the component's state programmatically.

                              Overall, controlled components provide more control over the component's behavior and make it easier to manage the component's state. Uncontrolled components may be useful in some situations where you don't need to have as much control over the component's state.</h4>
                  </div>
                  <div className='my-3'>
                        <h2>Q2:How to validate react props using Proptyps?</h2>
                        <h4>React provides a library called PropTypes to help validate the props being passed to a component. PropTypes allow us to specify the expected data type and structure of each prop. This helps to catch errors early and ensures that your component receives the correct props.

                              To use PropTypes, we first need to import it from the 'prop-types' package. Then, we define the propTypes object on our component and specify the expected data types and structures for each prop.</h4>
                  </div>

                  <div className='my-3'>
                        <h2>Q3:Difference between nodejs and expressjs</h2>
                        <h4>Ans:Node.js is a runtime environment that allows us to run JavaScript code outside of a web browser. It provides a set of built-in modules to handle file systems, networking, and other system-level tasks.

                              Express.js is a web framework built on top of Node.js. It provides a simpler way to build web applications and APIs using Node.js. It offers features like routing, middleware, and templating to simplify the development process.

                              In summary, Node.js is the platform while Express.js is a framework built on top of Node.js that makes it easier to build web applications and APIs.</h4>
                  </div>
                  <div className='my-3'>
                        <h2>Q4:What is customHook? Why we create Custom Hook?</h2>
                        <h4>A custom hook is a reusable function in React that encapsulates the logic of a particular functionality that can be shared between components. We create custom hooks to avoid duplicating code and make our code more organized, modular, and reusable. Custom hooks allow us to extract stateful logic from a component and reuse it in other components. This makes our code more efficient and easier to maintain.</h4>
                  </div>

            </Container>
      );
};

export default Blog;