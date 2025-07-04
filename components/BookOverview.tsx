import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookCover from "./BookCover";


const BookOverview = ({ title, author, genre, rating, total_copies, available_copies, description, color, cover }: Book) =>{
    return( 
    <section className="text-5xl font-semibold text-white md:text-7xl">
        <div className="flex flex-1 flex-col gap-5">

            <div className="relative flex flex-1 justify-center ">
            <div className="relative">
                <BookCover
                    variant="wide"
                    className="z-10"
                    coverColor={color}
                    coverImage={cover}
                />

                <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
                    <BookCover
                    variant="wide"
                    coverColor={color}
                    coverImage={cover}
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
                    Total Books <span>{total_copies}</span>
                </p>

                <p>
                    Available Books <span>{available_copies}</span>
                </p>
            </div>

            <p className="mt-2 text-justify text-xl text-[#D6E0FF]">{description}</p>

            <Button className="mt-4 min-h-14 w-full bg-[#E7C9A5] text-[#16191E] hover:bg-primary/90 max-md:w-full !important">
                <Image src="icons/book.svg" alt="book" width={20} height={20}></Image>
                <p className="font-bebas-neue text-xl text-[#16191E]">BORROW</p>
            </Button>
        </div>

    </section>
    );
};

export default BookOverview;