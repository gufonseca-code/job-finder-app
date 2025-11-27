import InputKeywords from "@/components/InputKeywords"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Bem-vindo ao Job Finder!</h1>
      <p>Digite palavras chaves para começar a encontrar vagas de emprego</p>
      <InputKeywords />
    </div>
  )
}