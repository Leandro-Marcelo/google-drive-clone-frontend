import { ReactNode } from "react"

export interface Props {
  text: string
  children: ReactNode
  direction: string
  textNoWrap: boolean
}

const Tooltip = ({ text, children, direction, textNoWrap }: Props) => {
  const style = `absolute top-10 rounded text-white hidden transition-all duration-300 group-hover:block ${direction}`

  const textStyles = `rounded bg-[#5f6368] py-[6px] px-2 text-[12px] text-center shadow-lg ${
    textNoWrap ? "whitespace-nowrap" : ""
  }`

  const mainDivStyle = `p-2 rounded-full hover:bg-[#3c404314]  cursor-pointer relative group`

  return (
    /* group */
    <div className={mainDivStyle}>
      {children}
      <div className={style}>
        <div className="flex max-w-xs flex-col items-center">
          <div className={textStyles}>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
