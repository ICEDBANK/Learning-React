function BlogPage() {
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

    return (
        <div>
            <h1>This is the blog list</h1>
            <h2>Displays Dynamic Array using Map Funcition</h2>
            {MY_DATA.map((post, index) => (
                <ul key={index}>
                    <li>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default BlogPage;
