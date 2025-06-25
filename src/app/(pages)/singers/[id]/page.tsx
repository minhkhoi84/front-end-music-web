/* eslint-disable @typescript-eslint/no-explicit-any */
import Section1 from "./Section1";
import Section2 from "./Section2";

export default async function SingerDetailPage({ params }: any) {
  const { id } = await params;

  return (
    <>
      {/* CardInfo */}
      <Section1 id={id} />

      {/* Danh Sách Bài Hát */}
      <Section2 id={id} />
    </>
  );
}