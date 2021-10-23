import React from 'react'
import { ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, ICYoutube, LogoWeb } from '../../../assets'
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img src={img} className="icon-medsos" alt="sosial media"/>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoWeb} alt="logo"/>
                </div>
                <div className="sosial-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTelegram} />
                    <Icon img={ICYoutube} />
                    <Icon img={ICGithub} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
