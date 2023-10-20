import Footer from '../../components/Footer'
import Error from '../../components/Error'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import dataBase from '../../datas/data-base.json'
import "../../utils/style/logement.css"
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'






function Logement() {

    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    const record = dataBase.find(element => element.id === idLogement)

    const arrayStars = [1, 2, 3, 4, 5]

    if (!record) return(<Error />)

    const equipements = record.equipments.map((element, index) => (
       <li className='description-content' key={"equip-"+index.toString()}>{element}</li> 
    ))

    return (
        <div>
            <div className='logement'>
                <Carousel pictures={record.pictures} />
                <div className='ficheLogement'>
                    <div className='div-description'>
                        <h1>{record.title}</h1>
                        <h2>{record.location}</h2>
                        <div className='div-tags'>
                            { record.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>
                    <div className='bloc-stars'>
                        <div className='div-etoiles'>
                            <p>{record.host.name}</p>
                            <img src={record.host.picture} alt={record.title} />
                        </div>
                        <div className='stars'>
                            {
                                arrayStars.map((number) => (
                                    (<span key={number} className={record.rating >= number ? "on" : "" }>★</span>)
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='collapseLogement'>
                        <Collapse title='Description' content={record.description} />
                        <Collapse title='Equipements' content={equipements} />
                </div>
            </div>
                <Footer />
        </div>
    )
}

export default Logement




/*
function Logement() { 

    return (
        
        <div className='logementWrapper'>
            <div className='logement'>
                <img className='Carousel' src={Carousel} alt=''></img>
                <div className='logementTitle'>
                    {dataBase.map((record) => {
                        const {title, description, tags, equipments} = record;
                        return (
                            <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                            )
                        })}
                </div>
            </div>
            <Footer />
        </div>
    
    )
  }
  
  export default Logement
*/