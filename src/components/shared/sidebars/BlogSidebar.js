import React from "react";
import BlogCategories from "./widgets/BlogCategories";
import PopularBlogTags from "./widgets/PopularBlogTags";
import Download from "./widgets/Download";

const BlogSidebar = ({ sidebar }) => {
  return (
    <div className="service__details__sidebar sidebar">
      <BlogCategories />
    </div>
  );
};

export default BlogSidebar;
