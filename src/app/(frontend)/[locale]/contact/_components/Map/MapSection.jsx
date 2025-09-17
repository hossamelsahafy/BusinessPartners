import React from 'react'

const MapSection = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.766177388121!2d31.50459241480738!3d30.583358288813297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f15a694d64af%3A0x8fdb72e3cd71f1f4!2z2KjZitiy2YbYsyDYqNin2LHYqtmG2LHYsiB8IEJ1c2luZXNzIFBhcnRuZXJz!5e0!3m2!1sen!2seg!4v1758134799030!5m2!1sen!2seg"
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
