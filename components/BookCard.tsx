import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) =>(
    <li className={cn(isLoanedBook && "sm:w-52 w-full")}>
        <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && "w-full flex flex-col items-center")}
    >
      <BookCover coverColor={color} coverImage={cover} />

      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className="mt-2 line-clamp-1 text-base font-semibold text-white [min-w-475px]:text-xl">{title}</p>
        <p className="mt-1 line-clamp-1 text-sm italic text-[#D6E0FF] [min-w-475px]:text-base">{genre}</p>
      </div>

      {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="flex flex-row items-center gap-1 justify-center sm:justify-start">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-[#D6E0FF]">11 days left to return</p>
          </div>

          <Button className="bg-[#333C5C] mt-3 min-h-14 w-full font-bebas-neue text-base text-primary">Download receipt</Button>
        </div>
      )}
    </Link>
    </li>
);

export default BookCard;