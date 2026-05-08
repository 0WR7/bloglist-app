import Link from "next/link";
import { getBlogs } from "../services/blogs";
import { searchWithFilter } from "../actions/blogs";

const Blogs = async ({
    searchParams,
}: {
    searchParams: Promise<{ filter?: string }>;
}) => {
    const { filter } = await searchParams;
    const blogs = await getBlogs(filter);

    return (
        <div>
            <h3>Blogs</h3>
            <form action={searchWithFilter}>
                <label>
                    Filter blogs
                    <input type="text" name="filter" />
                </label>
                <button type="submit">search</button>
            </form>
            {blogs.map((blog) => (
                <ul key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    <li>{blog.author}</li>
                    <li>{blog.url}</li>
                    <li>{blog.likes}</li>
                </ul>
            ))}
        </div>
    );
};

export default Blogs;
