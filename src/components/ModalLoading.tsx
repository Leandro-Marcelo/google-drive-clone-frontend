export default function ModalLoading() {
  return (
    <div className="modalLoadingContainer fixed top-0 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.3)] text-black">
      <div className="flex h-[100px] w-[200px] items-center justify-center bg-white">
        Loading...
      </div>
    </div>
  )
}
