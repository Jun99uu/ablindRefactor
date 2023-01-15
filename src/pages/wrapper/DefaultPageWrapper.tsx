//header와 footer가 있는 페이지의 wrapper이다.

interface pageProps {
  children: React.ReactNode;
}

const DefaultPageWrapper = (props: pageProps) => {
  return <>{props.children}</>;
};

export default DefaultPageWrapper;
