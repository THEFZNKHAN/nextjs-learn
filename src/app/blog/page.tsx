import PostCard from "@/components/postCard/PostCard";

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="w-[30%] max-xl:w-2/5 max-md:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-xl:w-2/5 max-md:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-xl:w-2/5 max-md:w-full">
        <PostCard />
      </div>
      <div className="w-[30%] max-xl:w-2/5 max-md:w-full">
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
