import Image from "next/image";
import Article from "../../public/illustration-article.svg";
import Profile from "../../public/image-avatar.webp";

export default function Home() {
	return (
		<main className="max-w-md">
			<div className="bg-card-white p-6 m-6 rounded-xl flex flex-col gap-4 border border-card-black card">
				<Image
					src={Article}
					alt="article illustration"
					className="rounded-xl h-[200px] object-cover self-center w-full"
				/>
				<div className="bg-card-yellow px-2 py-1 rounded-md w-[30%] text-center">
					<p className="font-extrabold text-sm">Learning</p>
				</div>
				<p className="font-semibold text-sm">Published 21 Dec 2023</p>
				<h1 className="text-xl font-extrabold cursor-pointer hover:text-card-yellow">
					HTML & CSS foundations
				</h1>
				<p className="text-card-gray tracking-tight">
					These languages are the backbone of every website, defining structure, content,
					and presentation
				</p>
				<div className="flex items-center gap-4">
					<Image src={Profile} alt="profile avatar" width={32} />
					<h2 className="font-extrabold">Greg Hooper</h2>
				</div>
			</div>
		</main>
	);
}
