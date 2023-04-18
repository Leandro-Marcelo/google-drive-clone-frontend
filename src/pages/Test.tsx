import React, { useEffect, useState } from "react"
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist"

// Especifica la ruta al archivo del worker de pdf.js
GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js"

const PdfPreview = () => {
  const pdfUrl =
    "http://localhost:4000/api/files/56796f68-04e7-407d-a2cc-7d35882c2f6f.pdf"

  const [numPages, setNumPages] = useState<number | null>(null)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  useEffect(() => {
    // Cargar el archivo PDF
    const loadPdf = async () => {
      const pdf = await getDocument(pdfUrl).promise

      // Obtener la primera página del PDF
      const page = await pdf.getPage(1)

      // Obtener la representación en canvas de la página como una imagen PNG
      const viewport = page.getViewport({ scale: 1 })
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")
      canvas.width = viewport.width
      canvas.height = viewport.height

      if (context) {
        await page.render({ canvasContext: context, viewport: viewport })
          .promise

        // Obtener la URL de la imagen PNG
        const src = canvas.toDataURL("image/png") as string

        // Actualizar el estado con la URL de la imagen PNG
        setImageSrc(src)
        setNumPages(pdf.numPages)
      }
    }

    loadPdf()
  }, [pdfUrl])

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="PDF Preview" />}
      {numPages && <p>Number of Pages: {numPages}</p>}
    </div>
  )
}

export default PdfPreview
