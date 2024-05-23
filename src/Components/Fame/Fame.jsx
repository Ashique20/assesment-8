const Fame = () => {
  const data = [
    {
      author: "J.K. Rowling",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1061157246.jpg",
    },
    {
      author: "George R.R. Martin",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhiJXBF_jnBwBXLxaGhlwjmWbZOT5Do82Dv_sqMprKdA389MjYhSD34xXldshSIL1dwSKk-A",
    },
    {
      author: "J.R.R. Tolkien",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQitvZZqWEqo-21UQL2NpIkxjDUnWP6pIi4GbBcu7lqQlB1fNaL",
    },
    {
      author: "Harper Lee",
      image:
        "https://www.washingtonpost.com/blogs/style-blog/files/2015/02/77695641.jpg",
    },
    {
      author: "F. Scott Fitzgerald",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUceB0_rRxmb4viOa1RyaneX1CY0cimQWigLpkcfInajiRBsqA",
    },
    {
      author: "Jane Austen",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3xpmlvrkzSPtDiUKLwG4Ut4C9srTCfqFJfDw1ldN3YiwzVFK9",
    },
  ];

  return (
    <div>
      <h1 className="text-center mt-10 text-5xl mb-8">Hall of Fame</h1>
      <div className=" grid-cols-1 lg:grid grid-cols-3  gap-4">
        {data.map((d) => (
          <div className="  bg-base-100 shadow-xl p-8 lg:p-0 mt-8 mb-4">
            <figure>
              <img className="h-96 w-96 rounded" src={d.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{d.author}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fame;
