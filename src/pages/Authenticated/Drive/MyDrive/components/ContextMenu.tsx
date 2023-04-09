interface Props {
  x: number
  y: number
  children: React.ReactNode
}

export default function ContextMenu({ x, y, children }: Props) {
  return (
    <div
      className={`absolute  z-30 w-52 rounded bg-[#2e2e2e]`}
      style={{ top: y ? y : 0, left: x ? x : 0 }}
      onContextMenu={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {children}
    </div>
  )
}
