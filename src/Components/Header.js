import './Header.css'
export default function Header() {
    return (
        <div className='card'>
            <div className='title'>airmusic</div>
            <div className='list'>

                <li className='lst'>Home</li>
                <li className='lst'>About</li>
                <div>
                    <li className='lst lst1'>Spesifications</li>
                    <div className='line'></div>
                </div>
                <li className='lst'>Features</li>
                <li className='lst'>FAQ</li>
                <li className='lst'>Contact Us</li>
                <div className='border'>ORDER NOW</div>

            </div>
        </div>
    )
}