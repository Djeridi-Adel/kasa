import FooterLogo from '../../assets/LOGO-white.png'
import '../../utils/style/footer.css'



function Footer() {
    return (
      <div className='FooterDiv'>
        <img src={FooterLogo} alt=''/>
        <p className='FooterTxt'>2020 Kasa. All rights reserved</p>
      </div>
        
    )
  }
  
  export default Footer