import React from "react";
import Image from "next/image";
import BookCover from "@/components/BookCover";
import BorrowBook from "@/components/BorrowBook";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

interface Props extends Book {
  userId: string;
  
}
const BookOverview = async ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverUrl,
  id,
  userId, }: Props) =>{
    const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const borrowingEligibility = {
    isEligible: availableCopies > 0 && user.status === "APPROVE",
    message:
      availableCopies <= 0
        ? "Book is not available"
        : "You are not eligible to borrow this book",
  };

    return( 
    <section className="text-5xl font-semibold text-white md:text-7xl">
        <div className="flex flex-1 flex-col gap-5">

            <div className="relative flex flex-1 justify-center ">
            <div className="relative">
                <BookCover
                    variant="wide"
                    className="z-10"
                    coverColor={coverColor}
                    coverImage={coverUrl}
                />

                <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                    <BookCover
                    variant="wide"
                    coverColor={coverColor}
                    coverImage={coverUrl}
                />
                </div>
            </div>
        </div>

            <h1>{title}</h1>

            <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-[#D6E0FF]">
                <p>
                    By <span className="font-semibold text-[#EED1AC]">{author}</span>
                </p>
                <p>
                    Category{" "} <span className="font-semibold text-[#EED1AC]">{genre}</span>
                </p>
                <div className="flex flex-row gap-1">
                    <Image src="/icons/star.svg" alt="star" width={22} height={22}></Image>
                    <p>{rating}</p>
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-4 mt-1 text-xl text-[#D6E0FF]">
                <p>
                    Total Books <span>{totalCopies}</span>
                </p>

                <p>
                    Available Books <span>{availableCopies}</span>
                </p>
            </div>

            <p className="mt-2 text-justify text-xl text-[#D6E0FF]">{description}</p>

            <BorrowBook bookId={id} userId={userId} borrowingEligibility={borrowingEligibility}/>

            
        </div>

    </section>
    );
};

export default BookOverview;