import React from "react";
import BookCard from "@/components/BookCard";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) =>{
    return( 
    <section>
    <h2 className="font-bebas-neue text-4xl text-[#D6E0FF]">{title}</h2>

      <ul className="mt-10 flex flex-wrap gap-5 max-xs:justify-between xs:gap-10">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
    );
};

export default BookList;