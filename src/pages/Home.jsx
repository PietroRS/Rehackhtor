import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from '../styles/Home.module.css';
import playstationURL from '../assets/playstation.svg';
import xboxURL from '../assets/xbox.svg';
import ButtonUI from '../components/GeneralComponents/ButtonUI';
import NewsletterUI from '../components/GeneralComponents/NewsletterUI';
import LazyGames from '../components/HomeComponents/LazyGames';

function Home() {
  return (
    // <motion.div
    //   initial="hidden"
    //   animate="visible"
    //   exit={{ opacity: 0, transition: { duration: 0.5 } }}
    //   variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    // >
    <>
      <header className={style.masthead}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-10 col-md-8">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="display-1 fw-bold"
              >
                Ottieni le ultime ReHacktor 2026 novità .
              </motion.h1>
              <p className="lead text-white">
                L&apos;unica esperienza in cui potrai trovare tutti i
                videogiochi moderni <br /> e chattare live con altri gamers
              </p>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link to="/storage">
                  <ButtonUI >Archivio Giochi</ButtonUI>
                </Link>
              </motion.div>
              <div className="mt-5 ">
                <img src={playstationURL} className="mx-5" alt="play logo" />
                <img src={xboxURL} alt="xbox logo" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`container-fluid ${style.bgLegend}`}>
        <div className="container py-5">
          <div className="row py-5 justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <div className={`card ${style.cardLegend} px-5 py-5 rounded-0`}>
                <div className="card-body d-flex justify-content-center">
                  <div className="col-12 col-md-8">
                    <h2>La tua leggenda inizia qui</h2>
                    <p className="text-white">
                    Il cambiamento arriva dall'interno. Una misteriosa bomba genetica viene rinvenuta a Popov Power, lasciando ai giocatori il compito di scoprirne il vero scopo. Lanciati nell'area operativa per indagare e ottieni campioni di DNA dai nemici caduti. Mostra chi sei per davvero e modifica il tuo stile di gioco grazie a nuove funzionalità che ti consentono di vivere al meglio l'esperienza di Call of Duty. Lanciati nelle mappe di Call of Duty: Warzone, passando da Urzikstan a Rebirth Island, Fortune's Keep e altre ancora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${style.bgGames}`}>
        <div className="container py-5">
        <div className='d-flex-center'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JSeTj7vCsdA?si=Ob1ALYP9r27qqNrM&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
          <div className="row my-5 py-5 justify-content-center ">
            <div className="col-12 col-md-6 text-center text-green">
              <h2 className='text-green'>Benvenuto nel futuro oscuro</h2>
              <p className="lead">
                Immergiti nell&apos;universo di Rehacktor, qui potrai trovare
                tutti i giochi del momento, ti consigliamo di registrare i tuoi
                giochi preferiti per poi poter chattare live con altri games
                sulle novitá in corso. Qui di sotto ci sono quelli con lo score
                e rating piu alto, sicuramente otterrai delle risposte dai tuoi
                colleghi gamers.
              </p>
            </div>
          </div>
          {/* row che contiene i rated giochi caricati */}
          <LazyGames />
        </div>
      </div>
      <NewsletterUI />
    </>
    // </motion.div>
  );
}

export default Home;
