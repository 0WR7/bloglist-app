import { notFound } from "next/navigation";
import { getBlogById } from "../../services/blogs";
import { addBlogLikes } from "@/app/actions/blogs";

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = getBlogById(Number(id));

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h3>{blog.title}</h3>
      <ul>
        <li>Author: {blog.author}</li>
        <li>url: {blog.url}</li>
        <li>likes: {blog.likes}</li>
        <form action={addBlogLikes}>
          <input type="hidden" value={blog.id} name="id" />
          <button type="submit">like!</button>
        </form>
      </ul>
    </div>
  );
};

export default BlogPage;
