import HeroInner from "@/components/sections/hero-banners/HeroInner";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";

const BlogsMain = () => {
  return (
    <main>
      <HeroInner title={"Blogs"} currentItem={"Blogs"} />
      <BlogsPrimary />
    </main>
  );
};

export default BlogsMain;
