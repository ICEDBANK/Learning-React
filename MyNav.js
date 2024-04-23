import { NavLink } from "react-router-dom";

// Define a functional component called MyArticle which takes a 'stuff' object as its argument
function MyNavigation() {
    // Destructure the 'stuff' object to extract 'title' and 'paragraph' properties
    

    // Return JSX (JavaScript XML) markup to render the article content
    return (
        // React Fragment used to return multiple elements without adding extra nodes to the DOM
        <>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/Blog'>Blog</NavLink></li>
                        <li><NavLink to='/Products'>Products</NavLink></li>
                        <li><NavLink to='About'>About</NavLink></li>
                        <li><NavLink to='MyTable'>MyTable</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

// Export the MyArticle component as the default export
export default MyNavigation;