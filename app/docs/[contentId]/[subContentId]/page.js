import ContentDisplay from "@/components/ContentDisplay";

const SubContentPage = ({ params }) => {
  const { subContentId } = params;
  return <ContentDisplay id={subContentId} />;
};

export default SubContentPage;
