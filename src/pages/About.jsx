import './About.css'
const About = () => {
    return(
        <div className="aboutUs">
            <div className="data-about">
                <p>Name: CozyHouse</p>
                <p>Owner: Josip Dujmović</p>
            </div>
            <div className='flex'>
                <div className="location">
                    <p>Lokacija</p>
                </div>
                <div className="contact-form">
                    <h2>Contact us:</h2>
                    <label>Email:</label>
                    <input 
                    type='email'
                    name='email'
                    placeholder='Enter your email here...'
                    onChange={e => e.target.value}/>
                    <label>Message:</label>
                    <textarea
                    rows='4'
                    cols='25'
                    placeholder='Enter your message...'
                    onChange={e => e.target.value}
                    />
                </div>
            </div>
        </div>
    )
}

export default About;