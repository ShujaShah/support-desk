import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please Choose from the options Below</p>
      </section>
      <Link to ="/new-ticket"className='btn btn-reverse btn-block'>
        <FaQuestionCircle/>Create New Ticket
      </Link>

      <Link to ="/tickets"className='btn  btn-block'>
        <FaTicketAlt/>View my Tickets
      </Link>
    </>
  )
}

export default Home
