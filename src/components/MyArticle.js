// Define a functional component called MyArticle which takes a 'stuff' object as its argument
function MyArticle(stuff) {
    // Destructure the 'stuff' object to extract 'title' and 'paragraph' properties
    const { title, paragraph } = stuff;

    // Return JSX (JavaScript XML) markup to render the article content
    return (
        // React Fragment used to return multiple elements without adding extra nodes to the DOM
        <>
            {/* Render a div with the class 'article_box' */}
            <div className="article_box">
                {/* Render the article title */}
                <h1>{title}</h1>
                {/* Render the article paragraph */}
                <p>{paragraph}</p>
                {/* Render a submit button */}
                <button>Submit</button>
            </div>
        </>
    );
}

// Export the MyArticle component as the default export
export default MyArticle;