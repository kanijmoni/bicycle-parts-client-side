import React from 'react';

const Blogs = () => {
    return (
        <div className='w-96 mx-auto my-10'>
            <h2 className='font-3xl text-center'>Questions And Answers</h2>
            <p>Q: How will you improve the performance of a React Application? </p><br />
            <p>Ans:Optimizing performance in a React application
                Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.</p><br />
            <p>Q: What are the different ways to manage a state in a React application? </p><br />
            <p>Ans:What are the different ways you can handle state in a React application?
                5 Types of Application State in React and How They Help in State Management
                The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first.The Solution.1 .Data State.Control State.Session State.Location State.Conclusion</p><br />
            <p>Q: How does prototypical inheritance work? </p>
            <p>Ans:The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p><br />
            <p>Q:  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts  </p><br />
            <p>Ans:</p><br />
            <p>Q: You have an array of products.Each product has a name, price, description, etc.How will you implement a search to find products by name? </p>
            <p>Ans:</p><br />
            <p>Q: What is a unit test? Why should write unit tests?</p> <br />
            <p>Ans:</p>
        </div>
    );
};

export default Blogs;