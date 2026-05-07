interface Blog {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
}

type NewBlog = Omit<Blog, "id" | "likes"> & {
  likes?: number;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Something",
    author: "someone",
    url: "google.com",
    likes: 12,
  },
];

let nextId = 2;

export const getBlogs = () => {
  return blogs;
};

export const getBlogById = (id: number): Blog => {
  const blog = blogs.find((b) => b.id === id);
  if (!blog) {
    throw new Error("Failed to find blog");
  }
  return blog;
};

export const addBlog = (blog: NewBlog): void => {
  const newBlog: Blog = {
    id: nextId++,
    likes: 0,
    ...blog,
  };

  blogs.push(newBlog);
};

export const likeBlog = (id: number) => {
  const blog = getBlogById(id);
  if (blog) {
    blog.likes++;
  }
};
