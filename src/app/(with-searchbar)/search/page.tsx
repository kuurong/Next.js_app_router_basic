export default async function Page({
  //async는 서버컴포넌트
  //서버컴포넌트는 서버측에서 사전렌더링을위해 딱 한번 실행됨
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return <div>서치 페이지 : {q}</div>;
}
