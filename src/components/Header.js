import '../styles/Header.css'
import '../styles/common.css'
import Logo from '../images/Logo.png'
import Cart from '../images/Cart.png'
import Fb from '../images/Fb.png'
import Insta from '../images/Insta.png'
import Pintrest from '../images/Twiter.png'
import Twitter from '../images/Pintrest.png'

const Header = () => {
    return (
        <div className='header_container'>
            <div className='header_options'>
                <div className='header_contact'>
                    <button className='common_button_1'>Call 987 765 5678</button>
                </div>
                <div className='header_logo'>
                    <img className='header_logo_img' src={Logo} alt='logo' />
                </div>
                <div className='header_cart_reserve'>
                    <img className='header_cart_img' src={Cart} />
                    <button className='common_button_2'>Reservation</button>
                </div>
            </div>
            <div className='header_navbar_social'>
                <div className='header_nav_social_container'>
                    <div className='header_nav'>
                        <a className='nav_item' href='/'>Home</a>
                        <a className='nav_item' href='/'>About</a>
                        <a className='nav_item' href='/'>Menu</a>
                        <a className='nav_item' href='/'>Reservation</a>
                        <a className='nav_item' href='/'>Gallery</a>
                        <a className='nav_item' href='/'>Blogs</a>
                        <a className='nav_item' href='/'>Contact</a>
                    </div>
                    <div className='header_social'>
                        <img className='header_social_img' src={Insta} />
                        <img className='header_social_img' src={Fb} />
                        <img className='header_social_img' src={Twitter} />
                        <img className='header_social_img' src={Pintrest} />

                    </div>
                </div>
            </div>

        </div>
    )
};

export default Header;