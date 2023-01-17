//페이지 내 제목 - 자식으로 이루어진 콘텐츠 전용 공용 컴포넌트이다.
import "../../styles/contentwrapper.scss";

interface wrapperProps {
  title: string;
  children: React.ReactNode;
}

const ContentWrapper = (props: wrapperProps) => {
  const { title, children } = props;
  return (
    <div className="content-wrapper">
      <span className="content-title">{title}</span>
      {children}
    </div>
  );
};

export default ContentWrapper;
