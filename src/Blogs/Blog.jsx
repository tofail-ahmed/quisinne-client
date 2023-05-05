import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsDownload } from "react-icons/bs";
import { Authcontext } from '../Provider/AuthProvider';


const Blog = () => {
      const {loading}=useContext(Authcontext)
      const [loader, setLoader] = useState(false);

      const downloadPDF = () => {
            const capture = document.querySelector('.blog');
            setLoader(true);
            html2canvas(capture).then((canvas) => {
                  const imgData = canvas.toDataURL('img/png');
                  const doc = new jsPDF('p', 'mm', 'a4');
                  const componentWidth = doc.internal.pageSize.getWidth();
                  const componentHeight = doc.internal.pageSize.getHeight();
                  doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
                  setLoader(false);
                  doc.save('blog.pdf');
            })
      }
      if(loading){
                         return <div><div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                       </div></div>
                  }
      return (
            <div className=' my-5 container blog'>
                  <div className='mb-5 d-flex gap-3 justify-content-center align-items-center'>
                        <h1>Important Blogs</h1>
                        <Button
                              className='border-0'
                              onClick={downloadPDF}
                              disabled={!(loader === false)}
                        >
                              
                              {loader ? (
                                    <span>Downloading</span>
                              ) : (
                                    <span><BsDownload size={40} /></span>
                              )}
                        </Button>
                  </div>
                  <div>
                        <h3>Differences between uncontrolled and controlled components:</h3>
                        <p>
                              In React, form elements such as input, textarea, and select typically maintain their own state and update it based on user input. This is called an uncontrolled component, because React is not controlling the state of the form element. In contrast, a controlled component is one where the form element state is controlled by React, usually through a value prop and an onChange handler. Controlled components are often used for more complex forms, where the form data needs to be validated or manipulated before submission.
                        </p>
                  </div>
                  <div>
                        <h3>How to validate React props using PropTypes:</h3>
                        <p>
                              PropTypes is a library that allows you to specify the types of props that a component should expect. To use PropTypes, you first need to import it: <code>import PropTypes from 'prop-types';</code> Then, you can define the PropTypes for each prop in your component using the static propTypes property, like this: <code>MyComponent.propTypes = {'{'} name: PropTypes.string.isRequired, age: PropTypes.number.isRequired {'}'}</code>. This will ensure that if the wrong type of prop is passed to your component, a warning will be shown in the console.
                        </p>
                  </div>
                  <div>
                        <h3>Difference between nodejs and express js:</h3>
                        <p>
                              Node.js is a server-side runtime environment that allows you to run JavaScript code on the server. Express.js is a web application framework for Node.js that provides a set of features and tools for building web applications, such as routing, middleware, and templating. While Node.js provides the runtime environment, Express.js provides the tools and structure for building web applications.
                        </p>
                  </div>
                  <div>
                        <h3>What is a custom hook, and why will you create a custom hook?</h3>
                        <p>
                              A custom hook is a function that uses one or more React hooks to encapsulate and reuse some piece of logic. Custom hooks allow you to abstract away complex logic into a reusable function, which can be used in multiple components. For example, you might create a custom hook that fetches data from an API and returns the data along with a loading flag and an error flag. You would then be able to use this custom hook in multiple components that need to fetch data from the same API. Custom hooks can also help to keep your component code clean and focused on rendering, by moving complex logic to a separate function.
                        </p>
                  </div>
            </div>
      );
};

export default Blog;




// import React, { useContext, useRef } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import { PDFDownloadLink, PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
// import { Authcontext } from '../Provider/AuthProvider';

// const Blog = () => {
//      
//       const myDoc = (
//             <Document>
//                   <Page>
//                         <Text>
//                               Q1:What is the difference between uncontrolled and controlled components?
//                         </Text>
//                         <Text>
//                               Ans:In React, controlled components are components whose state is controlled by React, while uncontrolled components are components whose state is controlled by the browser.

//                               In controlled components, the component's state is managed through the component's props, and any changes to the state are handled by the component's event handlers. This means that the component's state is always in sync with the application's state.

//                               In uncontrolled components, the component's state is managed by the browser, and changes to the state are handled through the component's DOM elements. This means that the component's state may not always be in sync with the application's state, and it may be difficult to update the component's state programmatically.

//                           Overall, controlled components provide more control over the component's behavior and make it easier to manage the component's state. Uncontrolled components may be useful in some situations where you don't need to have as much control over the component's state.
//                     </Text>
//                     <Text>
//                           Q2:How to validate react props using Proptyps?
//                     </Text>
//                     <Text>
//                           React provides a library called PropTypes to help validate the props being passed to a component. PropTypes allow us to specify the expected data type and structure of each prop. This helps to catch errors early and ensures that your component receives the correct props.

//                           To use PropTypes, we first need to import it from the 'prop-types' package. Then, we define the propTypes object on our component and specify the expected data types and structures for each prop
//                     </Text>
//                     <Text>
//                           Q3:Difference between nodejs and expressjs
//                     </Text>
//                     <Text>
//                           Ans:Node.js is a runtime environment that allows us to run JavaScript code outside of a web browser. It provides a set of built-in modules to handle file systems, networking, and other system-level tasks.

//                           Express.js is a web framework built on top of Node.js. It provides a simpler way to build web applications and APIs using Node.js. It offers features like routing, middleware, and templating to simplify the development process.

//                           In summary, Node.js is the platform while Express.js is a framework built on top of Node.js that makes it easier to build web applications and APIs.
//                     </Text>
//                     <Text>
//                           Q4:What is customHook? Why we create Custom Hook?
//                     </Text>
//                     <Text>
//                           Ans:A custom hook is a reusable function in React that encapsulates the logic of a particular functionality that can be shared between components. We create custom hooks to avoid duplicating code and make our code more organized, modular, and reusable. Custom hooks allow us to extract stateful logic from a component and reuse it in other components. This makes our code more efficient and easier to maintain.
//                     </Text>

//                   </Page>
//             </Document>
//       );
//       const pdfRef = useRef();

//       const handleDownloadPDF = () => {
//             pdfRef.current.updateContainer(myDoc);
//             pdfRef.current.download();
//       };
//       

//       return (
//             <Container>
//                   <div >

//                     <PDFViewer style={{ width: '100%', height: '500px' }} ref={pdfRef}>
                        
                              

//                           { myDoc}
                        
//                     </PDFViewer>
//                     <Button variant='primary' onClick={handleDownloadPDF}>
//                           Download PDF
//                     </Button>
//               </div>
//         </Container>
//   );
// };

// export default Blog;













