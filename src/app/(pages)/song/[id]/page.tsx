/* eslint-disable @typescript-eslint/no-explicit-any */
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default async function SongDetailPage({ params }: any) {
  const { id } = await params;

  return (
    <>
      {/* Card Info */}
      <Section1 id={id} />

      {/* Lời Bài Hát */}
      <Section2 id={id} />

      {/* Bài Hát Cùng Danh Mục */}
      <Section3 id={id} />
    </>
  );
}