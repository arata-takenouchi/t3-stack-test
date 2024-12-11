import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/PRzMhZV0Z7s9T80ktzbGhPQHwkNvrI6W91cUejqxy4dBKmAa",
  "https://utfs.io/f/PRzMhZV0Z7s9jm4noFpzLNT64FyEZ27QACeuoKiSrpqlnIVY",
  "https://utfs.io/f/PRzMhZV0Z7s9T80ktzbGhPQHwkNvrI6W91cUejqxy4dBKmAa",
  "https://utfs.io/f/PRzMhZV0Z7s9PGx5QZV0Z7s9AgRmaViW2T3Okv8zJdLMqpyf"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
