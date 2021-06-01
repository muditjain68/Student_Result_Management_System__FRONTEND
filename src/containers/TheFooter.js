import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.jainuniversity.ac.in/" target="_blank" rel="noopener noreferrer">Jain</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.jainuniversity.ac.in/" target="_blank" rel="noopener noreferrer">Jain(Deemed-to-be-University)</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
