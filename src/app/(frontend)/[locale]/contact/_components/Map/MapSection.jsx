import React from 'react'

const MapSection = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.221808471707!2d31.46441537619395!3d30.0304937749306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c0197695f2b%3A0x51b64f8c49d5ca1f!2sN%20Teseen%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1758023428520!5m2!1sen!2seg"
        width="600"
        height="450"
        loading="lazy"
        className="w-full rounded-lg"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapSection
