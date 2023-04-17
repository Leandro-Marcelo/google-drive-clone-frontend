interface Props {
  x: number
  y: number
  children: React.ReactNode
}

export default function ContextMenu({ x, y, children }: Props) {
  return (
    <div
      className={`absolute  w-52 rounded animate-dropdown z-20`}
      style={{
        top: y ? y : 0,
        left: x ? x : 0,
        boxShadow:
          "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
    >
      {children}
    </div>
  )
}
