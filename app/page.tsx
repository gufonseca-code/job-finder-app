import InputKeywords from "@/components/InputKeywords"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Bem-vindo ao <span className="text-(--primary)">Job Finder!</span>
        </h1>
        <p className="text-lg md:text-xl text-(--muted-foreground) max-w-[600] mx-auto">
          Digite palavras-chave para começar a busca
        </p>
      </div>
      <div className="w-full max-w-md">
        <InputKeywords />
      </div>
    </div>
  )
}