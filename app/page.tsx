import InputKeywords from "@/components/InputKeywords"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Bem-vindo ao Job Finder!</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Digite palavras chaves para começar a encontrar vagas de emprego
      </p>
      <InputKeywords />
    </div>
  )
}