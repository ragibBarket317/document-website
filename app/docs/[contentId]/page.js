import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = ({ params }) => {
  const { contentId } = params;
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
