import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center">
            <Image
              src="/fjp_photo.png"
              alt="Federico Jose Pacheco"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <div className="text-left mb-4">
            <h1 className="text-3xl font-bold">Federico Jose</h1>
            <h1 className="text-3xl font-bold">Pacheco</h1>
            <p className="text-xl text-gray-600">Computer Science Engineer</p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="text-center mb-4">
          <p>This website is under construction!</p>
          <p>Please come back later</p>
        </div>
      </footer>
    </div>
  );
}
