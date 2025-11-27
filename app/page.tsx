import InputKeywords from "@/components/InputKeywords"

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Job Finder!</h1>
      <p>Digite palavras chaves para começar a encontrar vagas de emprego</p>
      <InputKeywords />
    </div>
  )
}