import React from 'react'
import logo from '../../images/logo.png'
import * as FaIcons from 'react-icons/fa'
import Producto from '../../images/producto.png'
import Producto2 from '../../images/producto2.png'
import Producto3 from '../../images/producto3.png'
import Producto4 from '../../images/producto4.png'
import Producto5 from '../../images/producto5.png'
import Producto6 from '../../images/producto6.png'
import Producto7 from '../../images/producto7.png'
import '../Header.scss'
function Header () {
  return (
    <>
      <header className='App-header '>
        <div className='contenedor-header puff-in-center'>
          <div className='header-el-col'>
            <img src={logo} className='logo-grid' alt='skinder' />
            <div className='img'>
              <img
                src={Producto}
                className='img-grid'
                alt='DERMOLIMPIADOR
EXTRA CLEANSING'
              />
            </div>
            <div className='name-el'>
              <p>
                <span>DERMOLIMPIADOR </span>
                <br />
                EXTRA CLEANSING
              </p>
            </div>
            <div className='contenedor-precios'>
              <div className='derma-price'>
                <p>DERMA-PRICE $300</p>
              </div>
              <div className='regular-price'>
                <p>PRECIO REGULAR $349</p>
              </div>
            </div>
          </div>
          <div className='header-el-col doble'>
            <div className='uno'>
              {' '}
              <div className='img '>
                <img
                  src={Producto2}
                  className='img-grid'
                  alt='BARRA LIMPIADORA CON GLICERINA
DEEP CLEAN'
                />
              </div>
              <div className='name-el uno'>
                <p>
                  <span>BARRA LIMPIADORA CON GLICERINA </span>
                  <br />
                  DEEP CLEAN
                </p>
              </div>
              <div className='contenedor-precios'>
                <div className='derma-price'>
                  <p>DERMA-PRICE $300</p>
                </div>
                <div className='regular-price'>
                  <p>PRECIO REGULAR $349</p>
                </div>
              </div>
            </div>
            <div className='dos'>
              {' '}
              <div className='img img2'>
                <img
                  src={Producto5}
                  className='img-grid'
                  alt='BARRA LIMPIADORA HUMECTANTE
CREAMY MOISTURIZING'
                />
              </div>
              <div className='name-el2 name-el'>
                <p>
                  <span>BARRA LIMPIADORA HUMECTANTE</span>
                  <br />
                  CREAMY MOISTURIZING
                </p>
              </div>
              <div className='contenedor-precios'>
                <div className='derma-price derma-price2'>
                  <p>DERMA-PRICE $300</p>
                </div>
                <div className='regular-price2 regular-price'>
                  <p>PRECIO REGULAR $349</p>
                </div>
              </div>
            </div>
          </div>
          <div className='header-el-col'>
            <div className='img'>
              <img
                src={Producto3}
                className='img-grid3'
                alt='SHAMPOO
PRO VITAMINS'
              />
            </div>
            <div className='name-el'>
              <p>
                <span>SHAMPOO</span>
                <br />
                PRO VITAMINS
              </p>
            </div>
            <div className='contenedor-precios'>
              <div className='derma-price'>
                <p>DERMA-PRICE $282</p>
              </div>
              <div className='regular-price'>
                <p>PRECIO REGULAR $399</p>
              </div>
            </div>
          </div>
          <div className='header-el-col'>
            <div className='img'>
              <img
                src={Producto4}
                className='img-grid3'
                alt='SHAMPOO
TAR'
              />
            </div>
            <div className='name-el'>
              <p>
                <span>SHAMPOO</span>
                <br />
                TAR
              </p>
            </div>
            <div className='contenedor-precios'>
              <div className='derma-price'>
                <p>DERMA-PRICE $330</p>
              </div>
              <div className='regular-price'>
                <p>PRECIO REGULAR $459</p>
              </div>
            </div>
          </div>

          <div className='header-el-col doble5'>
            <div className='uno'>
              {' '}
              <div className='img'>
                <img
                  src={Producto6}
                  className='img-grid6'
                  alt='SPRAY GEL
ANTIBACTERIAL 120ML'
                />
              </div>
              <div className='name-el name-el5'>
                <p>
                  <span>SPRAY GEL </span>
                  <br />
                  ANTIBACTERIAL 120ML{' '}
                </p>
              </div>
              <div className='contenedor-precios'>
                <div className='derma-price derma-price5'>
                  <p>DERMA-PRICE $75</p>
                </div>
                <div className='regular-price regular-price5'>
                  <p>PRECIO REGULAR $90</p>
                </div>
              </div>
            </div>
            <div className='dos'>
              {' '}
              <div className='img img5'>
                <img
                  src={Producto7}
                  className='img-grid6'
                  alt='SPRAY GEL
ANTIBACTERIAL 60ML '
                />
              </div>
              <div className='name-el5 name-el'>
                <p>
                  <span>SPRAY GEL</span>
                  <br />
                  ANTIBACTERIAL 60ML{' '}
                </p>
              </div>
              <div className='contenedor-precios'>
                <div className='derma-price derma-price5'>
                  <p>DERMA-PRICE $50</p>
                </div>
                <div className='regular-price regular-price5'>
                  <p>PRECIO REGULAR $65</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer puff-in-center'>
          <small>LISTADO DE PRECIOS VÁLIDOS PARA EL 2022</small>
          <h1
            style={{
              fontSize: '0.7rem',
              letterSpacing: '4px',
              fontWeight: 'lighter',
              marginTop: '0.4rem'
            }}>
            PRODUCTOS DERMATOLÓGICOS SKIN DER SA de CV
          </h1>
          <div className='contenedor-botones'>
            <a href='https://www.facebook.com/skinder.mx'>
              {' '}
              <FaIcons.FaFacebook></FaIcons.FaFacebook>
            </a>

            <a href='https://www.instagram.com/skinder.mx/'>
              <FaIcons.FaInstagram></FaIcons.FaInstagram>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
