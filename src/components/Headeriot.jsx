import React from 'react'

export default function Headeriot(props) {
  // const {wow, woo} = props

  return (
    <div>
      <h1 className="text-center text-blue-600 text-3xl font-bold mt-3 mb-3">
        สวัสดี Iot SAU
        <br />
        {wow} {woo}
      </h1>
      <hr style={{width:'80%'}} className="mb-5 mx-auto"/>
    </div>
  )
}

