import { useEffect } from 'react'

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Draford Eye Care Clinic`
      : 'Draford Eye Care Clinic — Professional Eye Care in Gudu, Abuja'
  }, [title])
}

export default useDocumentTitle
