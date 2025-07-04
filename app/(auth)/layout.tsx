import {ReactNode} from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");

    return <main className="relative flex flex-col-reverse text-[#D6E0FF] sm:flex-row">
        <section className="my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-[#16191E] px-5 py-10">
            <div className="mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10"
                style={{
                background: "linear-gradient(180deg, #12141d 0%, #12151f 100%)",
                }}>
                <div className="flex flex-row gap-3">
                    <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
                    <h1 className="text-2xl font-semibold text-white">KOS KHA KHA</h1>
                </div>
                <div>{children}</div>
            </div>
        </section>

        <section className="sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1">
            <Image
                src="/images/auth-illustration.png"
                alt="auth illustration"
                height={1000}
                width={1000}
                className="size-full object-cover"
                />
        </section>
    </main>
};

export default Layout;