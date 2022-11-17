import ContentLoader from "react-content-loader";

const Skeleton = (props) => {
  return (
    <>
      <ContentLoader
        {...props}
      >
        <rect x="0" y="0" rx="7" ry="7" width={props.width} height={props.height} />
      </ContentLoader>
    </>
  );
};

export default Skeleton;
