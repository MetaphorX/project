import React, {useState, useEffect} from 'react'
import {Document, Page} from 'react-pdf'
import { useParams } from 'react-router-dom'
import { client } from '../client'
import { pdfQuery } from '../utils/data'

const ProjectDetail = () => {

  const [projectDetail, setProjectDetail] = useState(null)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const {docId} = useParams()

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages)
    setPageNumber(1)
  }

  const fetchPDF = () =>{
    let query = pdfQuery(docId)
    if (query){
      client.fetch(query)
        .then((data) =>{
          setProjectDetail(data[0])

          // if(data[0]){
          //   query = pdfQuery(docId)
          //   client.fetch(query)
          //     .then((data))
          // }
        })
    }
  }

  useEffect(()=>{
    fetchPDF()
  },[docId])

  return (
    <div>
      {/* Beginning of tag*/}
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg border-t border-red-500 mt-5">
        <h5 className="font-bold text-center">Display <br/>PDF <br/> MAterial <br/>here</h5>
        <Document file="" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(
            new Array(numPages),
            (el, index) =>(
              <Page 
                key={`page_${index+1}`}
                pageNumber={index+1}
              />
            )
          )}
        </Document>
      </div>
    </div>

      {/* End of tag */}
    </div>
  )
}

export default ProjectDetail