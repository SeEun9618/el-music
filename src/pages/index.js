export default function Home() {
  return <></>;
}

export async function getServerSideProps(context) {
  context.res.writeHead(302, {
    Location: '/albums'
  });
  context.res.end();
  return { props: {} };
}