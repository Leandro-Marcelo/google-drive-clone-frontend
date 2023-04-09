import { useState, ChangeEvent } from "react"

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState)

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  const resetForm = () => {
    setForm(initialState)
  }

  return {
    handleChange,
    ...form,
    resetForm,
  }
}

export default useForm
