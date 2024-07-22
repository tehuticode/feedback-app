const Blog = () => {
 
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Components',
      content: 'React components let you split the UI into independent, reusable pieces...',
      author: 'John Doe',
      date: 'July 21, 2024'
    },
    {
      id: 2,
      title: 'Getting Started with React Router',
      content: 'React Router is a standard library for routing in React...',
      author: 'Jane Smith',
      date: 'July 20, 2024'
    },
    {
      id: 3,
      title: 'State Management in React',
      content: 'State management is one of the most important aspects of React...',
      author: 'Alice Johnson',
      date: 'July 19, 2024'
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <footer className="blockquote-footer">
                  {blog.author} on {blog.date}
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};export default Blog;
