import React from "react"

import VendorComponentRight from "./VendorComponentRight"
import VendorComponentLeft from "./VendorComponentLeft"

const ResponsiveVendor = ({ matches, heading, subheading, text, img }) => {
  return (
    <>
      {matches ? (
        <div id="NaanStop">
          <VendorComponentRight
            heading={heading}
            subheading={subheading}
            text={text}
            img={img}
          />
        </div>
      ) : (
        <div id="NaanStop">
          <VendorComponentLeft
            heading={heading}
            subheading={subheading}
            text={text}
            img={img}
          />
        </div>
      )}
    </>
  )
}

export default ResponsiveVendor
