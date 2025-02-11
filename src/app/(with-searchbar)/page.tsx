import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

async function AllBooks() {
  const response = await fetch("http://localhost:12345/book");
  if (!response.ok) {
    return <div>오류가 발생했습니다....</div>;
  }
  const allBooks: BookData[] = await response.json();
  console.log(allBooks);

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
  const response = await fetch("http://localhost:12345/book/random");
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
  const response = await fetch("http://localhost:12345/book");
  const allBooks = await response.json();
  console.log(allBooks);
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
