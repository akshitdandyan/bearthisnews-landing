import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="w-screen bg-black p-6 flex items-center justify-center gap-2">
                <Image
                    src={"/logo.png"}
                    width={40}
                    height={40}
                    alt="BearThisNews"
                />
                <div className={"text-white font-bold text-2xl ml-2"}>
                    BearThisNews
                </div>
            </div>

            <div className="text-center">
                <p className="p-4">
                    BearThisNews automates the process of finding latest news
                    and delivering it to you daily morning in a very concise
                    TLDR format via most active social media apps.
                </p>

                <p className="p-4 text-gray-500 tracking-wide text-sm">
                    We are currently in beta and are looking for early adopters.
                </p>
            </div>

            <div className="text-center flex justify-center items-center gap-4 md:gap-14 flex-col md:flex-row">
                <div className="flex justify-center items-center flex-col">
                    <Image
                        src={"/icons/linkedin.svg"}
                        width={40}
                        height={40}
                        alt={"LinkedIn"}
                    />
                    <Link
                        target="_blank"
                        className="text-gray-600 text-sm tracking-wider mt-2"
                        href={"https://www.linkedin.com/company/bearthisnews"}
                    >
                        LinkedIn Page
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <Image
                        src={"/icons/instagram.svg"}
                        width={40}
                        height={40}
                        alt={"LinkedIn"}
                    />
                    <Link
                        target="_blank"
                        className="text-gray-600 text-sm tracking-wider mt-2"
                        href={"https://www.instagram.com/bearthisnews"}
                    >
                        Instagram Account
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <Image
                        src={"/icons/whatsapp.svg"}
                        width={40}
                        height={40}
                        alt={"LinkedIn"}
                    />
                    <Link
                        target="_blank"
                        className="text-gray-600 text-sm tracking-wider mt-2"
                        href={
                            "https://whatsapp.com/channel/0029VaACgg0H5JLpgI4naq0w"
                        }
                    >
                        Whatsapp Channel
                    </Link>
                </div>
            </div>

            <div className="mb-2">
                <Link
                    target="_blank"
                    href={"https://www.linkedin.com/in/akshitdandyan/"}
                >
                    Contact Developer
                </Link>
            </div>
        </main>
    );
}
