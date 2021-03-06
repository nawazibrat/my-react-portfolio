import React, { useState } from 'react'

const Contact = ({ main }) => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    window.open(
      `mailto:test.mailer.0080@gmail?subject=${subject}&body=${name}: ${message}`
    )
  }

  return (
    <section id='contact'>
      <div className='row section-head'>
        <div className='two columns header-col'>
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className='ten columns'>
          <p className='lead'>{main?.message}</p>
        </div>
      </div>

      <div className='row'>
        <div className='eight columns'>
          <form id='contactForm' name='contactForm' onSubmit={handleClick}>
            <fieldset>
              <div>
                <label htmlFor='contactName'>
                  Name <span className='required'>*</span>
                </label>
                <input
                  value={name}
                  type='text'
                  size='35'
                  id='contactName'
                  name='contactName'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* <div>
                <label htmlFor='contactEmail'>
                  Email <span className='required'>*</span>
                </label>
                <input
                  value={email}
                  type='text'
                  defaultValue=''
                  size='35'
                  id='contactEmail'
                  name='contactEmail'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> */}

              <div>
                <label htmlFor='contactSubject'>
                  Subject <span className='required'>*</span>
                </label>
                <input
                  value={subject}
                  type='text'
                  size='35'
                  id='contactSubject'
                  name='contactSubject'
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor='contactMessage'>
                  Message <span className='required'>*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols='50'
                  rows='15'
                  id='contactMessage'
                  name='contactMessage'
                  required></textarea>
              </div>

              <div>
                <button type='submit' className='submit'>
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
          {/* <>
            <div id='message-warning'> Something went wrong!</div>
            <div id='message-success'>
              <i className='fa fa-check'></i>Your message was sent, thank you!
              <br />
            </div>
          </> */}
        </div>

        <aside className='four columns footer-widgets'>
          <div className='widget widget_contact'>
            <h4>Address and Phone</h4>
            <p className='address'>
              {main.name}
              <br />
              {main.address.street} <br />
              {main.address.city}, {main.address.state}, {main.address.country}{' '}
              {main.address.zip}
              <br />
              <span>{main.phone}</span>
            </p>
          </div>

          <div className='widget widget_tweets'></div>
        </aside>
      </div>
    </section>
  )
}

export default Contact
