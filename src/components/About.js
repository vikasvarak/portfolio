import React from 'react'

export default function About
    () {
    return (
        <div className='container'>
            <section className='m-5'>
                <h2 className='text-center'>About Me</h2>
                <div className='row m-5'>
                    <div className='col-6'>
                        <div>
                            <p>
                                Hello! My name is Brittany and I enjoy creating things that live on the internet.
                                My interest in web development started back in 2012 when I decided to try editing
                                custom Tumblr themes — turns out hacking together a custom reblog button taught me a
                                lot about HTML & CSS!
                            </p>
                            <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up,
                                a huge corporation, and a student-led design studio. My main focus these days is building accessible,
                                inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                            <p>
                                I also recently launched a course that covers everything you need
                                to build a web app with the Spotify API using Node & React.
                            </p>
                            <p>
                                Here are a few technologies I’ve been working with recently:
                            </p>
                        </div>
                        <div className='row'>
                            <ul className="list-group col-6">
                                <li className="list-group-item">Item 1</li>
                                <li className="list-group-item">Item 2</li>
                                <li className="list-group-item">Item 3</li>
                            </ul>
                            <ul className="list-group col-6">
                                <li className="list-group-item">Item 1</li>
                                <li className="list-group-item">Item 2</li>
                                <li className="list-group-item">Item 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p className='text-center'>My Image</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
