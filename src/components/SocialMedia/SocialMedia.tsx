import './SocialMedia.css'
import 'boxicons'


export const SocialMedia = () => {
    const openLink = (link : string)=>{
        window.open(`${link}` , '_blank')
    }
    
    return (
        <>
            <ul className="wrapper">
                <li className="icon facebook" onClick={()=>openLink("https://github.com/Alberthzaid")}>
                    <span className="tooltip">Github</span>
                    <box-icon type='logo' name='github'></box-icon>
                </li>
                <li className="icon twitter" onClick={()=>openLink("https://gitlab.com/ZaidPantoja")}>
                    <span className="tooltip">Gitlab</span>
                    <box-icon type='logo' name='gitlab'></box-icon>
                </li>
                <li className="icon instagram" onClick={()=>openLink("https://wa.link/680d7r")}>
                    <span className="tooltip">Whatsapp</span>
                    <box-icon type='logo' name='whatsapp'></box-icon>
                </li>
                <li className="icon Linkedin" onClick={()=>openLink("https://www.linkedin.com/in/alberth-zaid-a42aa8222")}>
                    <span className="tooltip">Linkedin</span>
                    <box-icon type='logo' name='linkedin' ></box-icon>
                </li>
            </ul>


        </>
    )
}