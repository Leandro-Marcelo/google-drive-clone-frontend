import { useRef } from "react"

const useCustomRef = () => {
  const refInputFile = useRef<HTMLInputElement>(null)

  // Puedes realizar cualquier lógica adicional aquí

  return refInputFile
}
