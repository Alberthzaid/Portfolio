import './Certifications.css'

export const CertificationsContent = () => {
    const certifications = [
        {
            id:1,
            title:"Certification in Data Science & IA",
            institute:"Nuclio Digital School",
            file : "/CursoDataScience&IA.pdf"

        },
        {
            id:2,
            title:"Hackathon Azure & OpenAi",
            institute:"Codigo Facilito",
            file : "/Microsoft.pdf"
        },
        {
            id:3,
            title:"3D Bionic Exoskeletons",
            institute:"P4H Bionics",
            file : "/P4HBionics.pdf"
        },
        {
          id:4,
          title:"Chatbots con IA",
          institute:"Big data academy",
          file:"/AlberthPantoja.pdf"

        }
    ]

    const openCertification = (Link : string)=>{
        window.open(`${Link}` , "_blank")
    }


  return (
    <div className="certifications_content">
        {
            certifications.map((certifi)=>(
            <div className="cardCertifi" key={certifi.id}>
              <div className="tools">
                <div className="circle">
                  <span className="red box"></span>
                </div>
                <div className="circle">
                  <span className="yellow box"></span>
                </div>
                <div className="circle">
                  <span className="green box"></span>
                </div>
              </div>
              <div className="card__content" >
                <h3 className='title_certifi'>{certifi.title}</h3>
                <p>{certifi.institute}</p>
                <button className='view_certifi' onClick={()=>openCertification(certifi.file)}>View certification</button>
              </div>
            </div>
            ))
        }
    </div>
  )
}