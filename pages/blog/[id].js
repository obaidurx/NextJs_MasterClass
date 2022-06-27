import { useRouter } from "next/router";
const BlogPostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Dynamic page loaded - {id}</h1>
    </div>
  );
};

export default BlogPostDetails;
