import { ReactNode } from "react"

export interface Props {
  text: string
  children: ReactNode
  direction: string
  textNoWrap: boolean
  hoverPadding?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Tooltip = ({
  text,
  children,
  direction,
  textNoWrap,
  hoverPadding,
  onClick,
}: Props) => {
  const mainContainer = `${
    hoverPadding ? hoverPadding : "p-2"
  } rounded-full hover:bg-[#3c404314]  cursor-pointer relative group`

  const tooltipContainer = `absolute rounded text-white hidden transition-all duration-300 group-hover:block ${direction} z-20`

  const textStyles = `rounded bg-[#5f6368] py-[6px] px-2 text-[12px] text-center shadow-lg font-semibold ${
    textNoWrap ? "whitespace-nowrap" : ""
  }`

  return (
    <div
      className={mainContainer}
      onClick={(e) => (onClick ? onClick(e) : () => {})}
    >
      {children}
      <div className={tooltipContainer}>
        <div className="flex max-w-xs flex-col items-center">
          <div className={textStyles}>{text}</div>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
