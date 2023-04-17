interface Props {
  ul: {
    pt: number
    pr: number
    pb: number
    pl: number

    top: number
    right: number
    bottom: number
    left: number
  }

  li: {}
}

const DropdownC = () => {
  return (
    <ul
      /*  bg-white mt-2 */
      /* top-0 left-0 */
      /* Toma el tamaño del padre relativo */
      className="absolute w-full  py-2  rounded-md animate-dropdown bg-red-500 "
      style={{
        boxShadow:
          "0px 12px 16px rgba(0, 0, 0, 0.1), 0px 8px 12px rgba(0, 0, 0, 0.06), 0px -10px 16px rgba(0, 0, 0, 0.06)",
      }}
    ></ul>
  )
}
export default DropdownC
