import {FaDatabase} from 'react-icons/fa'
import './Testimonial.css'

export default function Testimonial() {
  return (
    <div className='testimonial'>

        <div className="container">

            <div className="outline">

                <div className="content">
                    <i><FaDatabase />Staxx</i>
                    <p className="body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde inventore amet nesciunt quis necessitatibus dolores labore fuga et eveniet.
                    </p>
                    <div className="name">
                        <p>Mary Chilvers</p>
                        <p>CEO, Staxx</p>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}
