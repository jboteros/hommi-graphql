import { useQuery } from "@apollo/client";
import { GetBlogsDocument } from "../gql/graphql";

export const useBlog = () => {
  const { data } = useQuery(GetBlogsDocument, {
    variables: { filter: {}, limit: 10, page: 1 },
  });

  const blogHomeData = data?.getBlogs?.data?.docs || [];

  return { blogHomeData };
};
