import './PartnersPrev.css';
import waveUp from "../../../public/images/bg-hero.png";
import Image from "next/image";
export default function PartnersPrev(){
    return(
        <div className='pbackground'>
        <section className='partners-section width-container'>
            
        <img src="./images/pball1.png" className="pball1" />
            <img src="./images/pball2.png" className="pball2" />
            <img src="./images/pball3.png" className="pball3" />
            <img src="./images/pball4.png" className="pball4" />
            <img src="./images/pball5.png" className="pball5" />
            <img src="./images/pball6.png" className="pball6" />
            <img src="./images/pball7.png" className="pball7" />
            <h2 className='ptitle'>Наші партнери</h2>
            <div className="partners">
                <img src="./images/globallogic.svg" className='partner'></img>
                <img src="./images/kevych.svg" className='partner'></img>
                <img src="./images/sitime.svg" className='partner'></img>
                <img src="./images/kpmg.svg" className='partner'></img>
                <img src="./images/infineon.svg" className='partner'></img>
                <img src="./images/bilfinger.svg" className='partner'></img>
                <img src="./images/renesas.svg" className='partner'></img>
                <img src="./images/coax.svg" className='partner'></img>
                <img src="./images/cockseat.svg" className='partner'></img>
                <img src="./images/leoni.svg" className='partner'></img>
                <img src="./images/padruha.svg" className="padruha"/>
                <img src="./images/ukrsibbank.svg" className='partner'></img>
                <img src="./images/pwc.svg" className='partner'></img>
                <img src="./images/clario.svg" className='partner'></img>
                <img src="./images/lifesaver.svg" className='partner'></img>

            </div>
        </section>
                    <Image src={waveUp} alt="Wave" className="wave-up" style={{ transform: 'translateY(5%)' }}/>
        </div>
    )
}