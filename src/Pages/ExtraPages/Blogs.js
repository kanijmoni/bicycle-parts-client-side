import React from 'react';

const Blogs = () => {
    return (
        <div className='w-96 mx-auto my-10'>
            <h2 className='font-3xl text-center'>Questions And Answers</h2>
            <p>Q: How will you improve the performance of a React Application? </p><br />
            <p>Ans:</p><br />
            <p>Q: What are the different ways to manage a state in a React application? </p><br />
            <p>Ans:</p><br />
            <p>Q: How does prototypical inheritance work? </p>
            <p>Ans:</p><br />
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