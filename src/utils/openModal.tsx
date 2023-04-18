import { lazy, Suspense } from "react"
import { createRoot } from "react-dom/client"
import ModalLoading from "../components/ModalLoading"
import { Provider } from "react-redux"
import store from "../store/store"
export function openModal() {
  const Modal = lazy(() => import("../components/Modal"))
  const modalDiv = document.createElement("div")
  modalDiv.id = "modal"
  document.body.appendChild(modalDiv)

  const root = createRoot(modalDiv)
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title={"Modal test"}>
        <p>Modal content</p>
      </Modal>
    </Suspense>
  )
}

export function openModalCreateFolder() {
  const ModalCreateFolder = lazy(
    () => import("../components/ModalCreateFolder")
  )
  const modalDiv = document.createElement("div")
  modalDiv.id = "modalCreateFolder"
  document.body.appendChild(modalDiv)
  const root = createRoot(modalDiv)
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Provider store={store}>
        <ModalCreateFolder root={root} />
      </Provider>
    </Suspense>
  )
}

export function openModalUpdateFolder() {
  const ModalUpdateFolder = lazy(
    () => import("../components/ModalUpdateFolder")
  )
  const modalDiv = document.createElement("div")
  modalDiv.id = "modalCreateFolder"
  document.body.appendChild(modalDiv)
  const root = createRoot(modalDiv)
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Provider store={store}>
        <ModalUpdateFolder root={root} />
      </Provider>
    </Suspense>
  )
}

/* export function openModalCreateUpdateFolder() {
  const ModalCreateUpdateFolder = lazy(
    () => import("../components/ModalCreateUpdateFolder")
  )
  const modalDiv = document.createElement("div")
  modalDiv.id = "modalCreateFolder"
  document.body.appendChild(modalDiv)
  const root = createRoot(modalDiv)
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Provider store={store}>
        <ModalCreateUpdateFolder root={root} />
      </Provider>
    </Suspense>
  )
} */

export function openModalUpdateFile() {
  const ModalUpdateFile = lazy(() => import("../components/ModalUpdateFile"))
  const modalDiv = document.createElement("div")
  modalDiv.id = "modalUpdateFile"
  document.body.appendChild(modalDiv)
  const root = createRoot(modalDiv)
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Provider store={store}>
        <ModalUpdateFile root={root} />
      </Provider>
    </Suspense>
  )
}
