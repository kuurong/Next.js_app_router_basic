import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

async function AllBooks() {
  console.log("AllBooks");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "no-store" } //인덱스 페이지에 접속할때마다 매번 새롭게 데이터불러옴
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다....</div>;
  }
  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map(
        (
          book //book 타입 오류는 allBooks의 타입을지정하자
        ) => (
          <BookItem key={book.id} {...book} />
        )
      )}
    </div>
  );
}

async function RecoBooks() {
  console.log("RecoBooks");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map(
        (
          book //book 타입 오류는 allBooks의 타입을지정하자
        ) => (
          <BookItem key={book.id} {...book} />
        )
      )}
    </div>
  );
}

export default async function Home() {
  console.log("Home component");
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
