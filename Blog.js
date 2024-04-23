// Define BlogPage component
function BlogPage() {
    // Define an array of blog post data
    const MY_DATA = [
        {
            title: "The Pros of Winning the Lottery",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus voluptas vel, quia nostrum eligendi incidunt dolore unde, error ducimus officiis magni optio maiores. Eum eius esse dicta assumenda possimus."
        },
        {
            title: "The Cons of Winning the Lottery",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus voluptas vel, quia nostrum eligendi incidunt dolore unde, error ducimus officiis magni optio maiores. Eum eius esse dicta assumenda possimus."
        },
        {
            title: "What to do if you win the Lottery",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus voluptas vel, quia nostrum eligendi incidunt dolore unde, error ducimus officiis magni optio maiores. Eum eius esse dicta assumenda possimus."
        }
    ];

    // Render JSX markup to display blog post data
    return (
        <div>
            {/* Render heading for the blog list */}
            <h1>This is the blog list</h1>
            {/* Render heading to indicate dynamic array usage */}
            <h2>Displays Dynamic Array using Map Function</h2>
            {/* Map over the MY_DATA array and render each blog post */}
            {MY_DATA.map((post, index) => (
                <ul key={index}>
                    <li>
                        {/* Render the title of the blog post */}
                        <h3>{post.title}</h3>
                        {/* Render the content of the blog post */}
                        <p>{post.content}</p>
                    </li>
                </ul>
            ))}
        </div>
    );
}

// Export the BlogPage component
export default BlogPage;
