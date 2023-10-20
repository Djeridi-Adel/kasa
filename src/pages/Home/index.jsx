import HomeIllustration from '../../assets/Image source 1.png'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import '../../utils/style/home.css'


function Home() {
  return (
    <div className='HomeWrapper'>
        <div className='Banner'>
        <img className='HomeIllustration' src={HomeIllustration} alt=''></img>
          <h1 className='HomeSlogan'>Chez vous, partout et ailleurs</h1>
        </div>
        <Card />
      <Footer />
    </div>
  )
}

export default Home