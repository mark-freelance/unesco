"use client"

import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { IconContainer } from "@/components/container"
import { useElementSize, useFullscreen } from "@mantine/hooks"
import _ from "lodash"
import { MaximizeIcon, MinimizeIcon, ShrinkIcon } from "lucide-react"

// - error TypeError: url.replace is not a function
// pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString()
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

/**
 * ref: https://www.npmjs.com/package/react-doc-viewer
 * @param uri
 * @constructor
 */
export default function Viewer({ uri }: { uri?: string }) {
  const { ref, width, height } = useElementSize()
  const { fullscreen, toggle, ref: refFullscreen } = useFullscreen()

  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const FullscreenIcon = fullscreen ? ShrinkIcon : MaximizeIcon

  return (
    <div className={"w-full"} ref={refFullscreen}>
      <div className={"w-full relative"} ref={ref}>
        <IconContainer>
          <FullscreenIcon onClick={toggle} className={"absolute right-8 top-8 z-10"} />
        </IconContainer>
        <Document file={uri} onLoadSuccess={onDocumentLoadSuccess} className={"max-h-screen overflow-auto"}>
          {_.range(numPages).map((pageNumber) => (
            <Page pageNumber={pageNumber} width={width} key={pageNumber} noData={""} />
          ))}
        </Document>
      </div>
    </div>
  )
}
