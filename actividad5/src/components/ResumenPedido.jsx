import '../styles/ResumenPedido.css';
import illustrationHero from '../assets/illustrationhero.svg';
import iconMusic from '../assets/icon-music.svg';

function ResumenPedido() {
    return (
        <div className="fondo">
            <div className="resumen-pedido">
                <img src={illustrationHero} alt="Ilustración Hero" className="ilustracion" />
                <h1>Order Summary</h1>
                <p>You can listen to millions of songs, audiobooks and podcasts on any device, anywhere.</p>
                <div className="plan">
                    <img src={iconMusic} alt="Icono de música" className="icono-musica" />
                    <div>
                        <span className="titulo-plan">Annual Plan</span>
                        <span className="precio">$59.99/year</span>
                    </div>
                    <button>Change</button>
                </div>
                <div className="botones">
                    <button className="btn-pago">Proceed to Payment</button>
                    <button className="btn-cancelar">Cancel Order</button>
                </div>
            </div>
        </div>
    );
}

export default ResumenPedido;
