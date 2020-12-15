import Head from 'next/head';
import { Fragment } from 'react';
import { Footer, Modals} from './inlcudes';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link href="/dist/semantic.min.css" rel="stylesheet"/>
        <link href="/dist/style.css" rel="stylesheet"/>
        <link href="/dist/swiper.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700" rel="stylesheet"/>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript" charSet="utf-8"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js" type="text/javascript" charSet="utf-8"></script>
        <script src="/dist/swiper.min.js"></script>
        <script src="/dist/semantic.min.js"></script>
      </Head>

      {/* <body> */}
        <div className="ui sidebar left">
          <p>teste</p>
        </div>
        <div className="pusher">
        <header>
          <nav>
            <div className="ui attached stackable menu bg-1">
              <div className="ui container">
                <img src="https://dummyimage.com/200x50/5f27cd/ffffff" className="ui image center-mobile" alt=""/>
                <div className="right menu mobile hidden">
                  <a className="item"><i className="home icon"></i> Home</a>
                  <a className="item"><i className="mail icon"></i> Contato</a>
                  <div className="ui simple dropdown item">
                  More
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <a className="item"><i className="edit icon"></i> Edit Profile</a>
                    <a className="item"><i className="globe icon"></i> Choose Language</a>
                    <a className="item"><i className="settings icon"></i> Account Settings</a>
                  </div>
                </div>
                </div>
              </div>
              <a className="botLEFT mobile only center-mobile"><i className="content icon large"></i></a>
            </div>

          </nav>
        </header>

            <header id="logo">
                <div className="ui container">
                    <div className="ui equal width grid stackable middle aligned">
                        <div className="column">
                            <div className="ui items">
                                <div className="item center-mobile">
                                    <div className="ui small image">
                                        <img src="img/logo.png"/>
                                    </div>
                                    <div className="middle aligned content">
                                        <h1 className="ui header">
                                            Pizzaria Vila Dy Napolli
                                        </h1>
                                        <div className="description">
                                            <a className="horario-link"><span className="color-green">Aberto</span> • Fecha às 20h <i className="dropdown icon"></i> Ver mais</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right aligned center-mobile">
                            <ul className="no-bullets">
                                <li>
                                    <span className="font-large color-1"><i className="call square icon"></i> <b>13 3272-5600 | 13 3272-5900 | 3261-2598</b></span>
                                    <br/>
                                    <i className="mail icon"></i> contato@viladynapolli.com.br 
                                </li> 
                                <li><i className="marker alternate icon"></i> Rua Conselheiro João Alfredo, 376 • Macuco • Santos </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div id="top-menu" className="ui two item inverted green big menu">
              <a href="#cardapio" className="item">
                Cardápio Pizza
              </a>
              <a href="#almoco" className="item">
                Cardápio Almoço
              </a>
            </div>
          {/* <!-- BANNER --> */}
          <div className="ui container fluid">
            <div className="ui grid padded">
              <div className="sixteen wide column middle aligned">
                <div className="swiper-container-banner">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="ui header huge">
                        <div className="ui container fluid">
                          <div className="ui grid">
                            <div className="sixteen column">
                              <p className="head-title">Blunt Trucks Death Box</p>
                              <p>
                                Eric Koston alley oop ho-ho masonite launch ramp gap goofy footed.
                              </p>
                              <div className="ui hidden divider"></div>
                              <a href="#0" className="ui button big">Veja Mais...</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="ui container fluid">
                        <div className="ui grid">
                          <div className="sixteen column">
                            <p className="head-title">Soda Wicket Woof </p>
                            <p>
                              Wants pawn term, dare worsted ladle gull hoe lift wetter murder inner ladle cordage, honor itch offer lodge dock florist.
                            </p>
                            <div className="ui hidden divider"></div>
                            <a href="#0" className="ui button big">Cadastrar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next or lower hidden"></div>
                  <div className="swiper-button-prev or lower hidden"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- BANNER IMAGE--> */}
          <div className="ui container fluid">
            <div className="ui grid">
              <div className="sixteen wide column">
                <div className="swiper-container-banner-image">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img className="ui image" src="img/b1.jpg" alt=""/>
                    </div>
                  </div>
                  <div className="swiper-button-next or lower hidden"></div>
                  <div className="swiper-button-prev or lower hidden"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- MÓDULO 0 --> */}
          <section className="page-anuncio-1">
            <div className="ui container">
              <div className="ui grid padded clearing">
                <div className="sixteen wide column">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"><img className="ui image" src="img/0.jpg"/></div>
                      <div className="swiper-slide"><img className="ui image" src="img/1.jpg"/></div>
                    </div>
                    {/* <!-- Add Pagination --> */}
                    <div className="swiper-pagination"></div>
                  </div>
                  
                </div>
                <div className="ui basic segment center">
                    <img className="ui image logo-empresa centered" src="img/logo-empresa-1.jpg" alt=""/>
                    <div className="ui accordion">
                      <div className="title"><span className="green">Aberto</span> • Fecha às 20h <i className="dropdown icon"></i></div>
                      <div className="content">
                        <div className="ui list">
                          <div className="item"><strong>Segunda:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Terça:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Quarta:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Quinta:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Sexta:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Sábado:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Domingo:</strong> das 9:00h às 20:00h</div>
                          <div className="item"><strong>Feriado:</strong> Não Abre</div>
                        </div>
                      </div>
                    </div>
                    <p className="font-biggest"><b>McDonalds</b></p>
                    <div className="description">
                      <ul className="no-bullets">
                        <li>Av. Ana Costa, 2332 <br/> Gonzaga • Santos • SP</li>
                        <li>
                          <i className="call square icon"></i> (13) 3333.4444
                          • <i className="whatsapp icon"></i> (13) 98876.4444
                          <br/>
                          <i className="mail icon"></i> macdonalds@mail.com.br
                        </li>
                      </ul>
                      <div className="ui list horizontal">
                        <a href="#0" className="item"><i className="square facebook icon large"></i></a>
                        <a href="#0" className="item"><i className="instagram icon large"></i></a>
                        <a href="#0" className="item"><i className="twitter icon large"></i></a>
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 1 --> */}
          <section className="bg-1 small-space">
            <div className="ui container">
              <div className="ui equal width grid padded stackable middle aligned">
                <div className="column">
                  <img src="https://dummyimage.com/900x600/5f27cd/fff" className="ui image" alt=""/>
                </div>
                <div className="column">
                  <p className="head-title">Ladle Rat Rotten</p>
                  <p className="font-large">
                    Wants pawn term, dare worsted ladle gull hoe lift wetter murder inner ladle cordage, honor itch offer lodge dock florist.
                  </p>
                  <p>Soda wicket woof tucker shirt court, an whinney retched a cordage offer groin-murder, picked inner widow, an sore debtor pore oil worming worse lion inner bet. Inner flesh, disk abdominal woof lipped honor bet an at a rope. Den knee poled honor groin-murder's nut cup an gnat-gun, any curdled dope inner bet. </p>
                  <p>Inner ladle wile, Ladle Rat Rotten Hut a raft attar cordage, an ranker dough belle. "Comb ink, sweat hard," setter wicket woof, disgracing is verse. Ladle Rat Rotten Hut entity bet rum an stud buyer groin-murder's bet. </p>
                  <a href="#0" className="ui button large basic black"> Saber Mais...</a>
                </div>
                
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 2 --> */}
          <section className="medium-space">
            <div className="ui container center aligned">
              <div className="ui equal width column grid padded stackable">
                <div className="sixteen wide column">
                  <div className="ui basic segment">
                    <p className="head-title">Den knee poled honor</p>
                    <p className="font-large">
                      Wants pawn term, dare worsted ladle gull hoe lift wetter murder inner ladle cordage, honor itch offer lodge dock florist.
                    </p>
                  </div>
                  <div className="ui hidden divider"></div>
                  <div className="ui four cards doubling">
                    <div className="card center aligned">
                      <span><i className="rocket icon violet massive"></i></span>
                      <h3 className="area-title">Tracker Pool Aerial</h3>
                      <p>Hip bail slob air frigid air aerial Steve Alba hang up.</p>
                    </div>
                    <div className="card center aligned">
                      <span><i className="bullhorn icon violet massive"></i></span>
                      <h3 className="area-title">Tracker Pool Aerial</h3>
                      <p>Hip bail slob air frigid air aerial Steve Alba hang up.</p>
                    </div>
                    <div className="card center aligned">
                      <span><i className="coffee icon violet massive"></i></span>
                      <h3 className="area-title">Tracker Pool Aerial</h3>
                      <p>Hip bail slob air frigid air aerial Steve Alba hang up.</p>
                    </div>
                    <div className="card center aligned">
                      <span><i className="rocket icon violet massive"></i></span>
                      <h3 className="area-title">Tracker Pool Aerial</h3>
                      <p>Hip bail slob air frigid air aerial Steve Alba hang up.</p>
                    </div>
                  </div>
                  <div className="ui hidden divider"></div>
                  <p>
                    Kickflip bone air berm tailslide. Axle mute-air skater OJ IIs skate key. Pump spine baseplate ollie. Slappy powerslide invert Matt Hensley soul skate. Coping half-cab pool ollie. Hugh Bod Boyle gap vert concave frontside air. Matt Hensley skater cab flip invert Kevin Harris. No comply invert egg plant hard flip. Crail slide rad Kevin Harris dude Bonite. Blunt invert Jeff Phillips mongo late. 
                  </p>
                  <div className="ui hidden divider"></div>
                  <a href="#0" className="ui button large basic black"> Saber Mais...</a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 3 --> */}
          <section className="small-space bg-1">
            <div className="ui container">
              <div className="ui equal width column grid padded stackable">
                <div className="sixteen wide column">
                  <div className="ui basic segment center aligned">
                    <p className="head-title">Full-cab crailtap shoveit frigid air</p>
                    <p className="font-large">
                      Nose-bump half-flip bearings slob air. 
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="column">
                    <div className="ui styled fluid accordion">
                      <div className="active title">
                        <span className="float-right"><i className="plus circle icon"></i></span>
                        Tracker Bail Durometer?
                      </div>
                      <div className="active content">
                        <p>Feeble lipslide aerial nollie quarter pipe nosepicker. Downhill Tracker griptape hardware hurricane skate or die. Nose-bump kick-nose gap mute-air Kris Markovich pivot 540. Tail speed wobbles spine bail betty method air. Sponsored backside rad bearings 50-50 hang-up.</p>
                      </div>
                      <div className="title">
                        <span className="float-right"><i className="plus circle icon"></i></span>
                        Pivot stalefish hospital flip smith grind pogo?
                      </div>
                      <div className="content">
                        <p>Pivot stalefish hospital flip smith grind pogo. Coper fast plant sketchy front foot impossible Tracker. Slob air shoveit fakie nosebone half-cab. Handplant Primo slide air powerslide judo air. Tailslide ho-ho shoveit smith grind full pipe. Crail slide nose griptape pool rocket air Neil Blender.</p>
                      </div>
                      <div className="title">
                        <span className="float-right"><i className="plus circle icon"></i></span>
                        Nose-bump bone air full pipe ho-ho?
                      </div>
                      <div className="content">
                        <p>Coffin Rudy Johnson late locals 1080. Gnarly hand rail Bonite nosegrind helipop. Goofy footed skater judo air switch. Nose-bump hang ten death box tic-tac. Wheels front foot impossible Venice nose blunt casper slide. Helipop slam manual fastplant. Hospital flip sponsored ollie north fakie Rune Glifberg. Bam Margera pump bone air pivot stoked. Mini ramp vert berm Chris Buchinsky snake. Skateboard Shuffle fast plant launch ramp Christ air chicken wing. </p>
                      </div>
                      <div className="title">
                        <span className="float-right"><i className="plus circle icon"></i></span>
                        Masonite casper slide flypaper rip grip varial?
                      </div>
                      <div className="content">
                        <p>Ollie north 360 soul skate Thunder front foot impossible durometer slap maxwell 270. Nose bump egg plant G&S lien air nose slide opposite footed nose blunt bearings. Fakie out death box salad grind boardslide bigspin grind front foot impossible Neil Blender. Heel flip vert nosepicker 50-50 hip cab flip McTwist hang-up. Bearings regular footed Kevin Harris street body varial hardware cab flip. Boned out freestyle 180 gap baseplate flypaper heel flip. Nosebone handplant fast plant wheels powerslide opposite footed drop in. </p>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <img src="https://dummyimage.com/900x600/5f27cd/fff" className="ui image" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 4 --> */}
          <section className="small-space">
            <div className="ui fluid container center aligned">
              <div className="ui equal width column grid padded stackable clearing">
                <div className="sixteen wide column">
                  <div className="ui basic segment">
                    <p className="head-title">Instagram - @Betty snake rail Tracker</p>
                    <p className="font-large">
                      Boardslide Blue Tile Lounge
                    </p>
                    {/* <!-- SnapWidget --> */}
                    <iframe src="https://snapwidget.com/embed/612537" className="snapwidget-widget" frameBorder={0} scrolling="no" style={{border: 'none', overflow: 'hidden', width: 1200 + 'px', height: 200 + 'px'}}></iframe>
                  </div>
                </div>
              </div>
              <div className="ui hidden divider"></div>
              <a href="#0" className="ui button large basic black">Instagram</a>
            </div>
          </section>
          {/* <!-- MÓDULO 5 --> */}
          <section className="bg-1" style={{marginTop: 35 + 'px'}}>
            <div className="ui container fluid">
              <div className="ui equal width grid stackable middle aligned">
                <div className="column">
                  <div className="panel">
                    <p className="head-title">Skate Ipsum Dolor Sit Amet.</p>
                    <p className="font-large">
                      Wants pawn term, dare worsted ladle gull hoe lift wetter murder inner ladle cordage.
                    </p>
                    <p>Blunt poseur Caballerial stalefish crail slide regular footed grind full pipe. Noseblunt slide chicken wing Rat Bones rad pogo opposite footed stoked rocket air. Crail grab nosebone gnarly late nollie hard flip bone air. Heel flip trucks slappy masonite transfer pop shove-it 900. Kick-nose sick front foot impossible nosepicker coping Christ air casper.</p>
                  </div>
                </div>
                <div className="eight wide column back1 center aligned">
                  <a className="icon-video" href="#0"><i className="play circle outline icon massive"></i></a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 6 --> */}
          <section className="medium-space">
            <div className="ui container">
                    <div className="ui two column grid padded middle aligned stackable">
                        <div className="column">
                            <p className="head-title">Ollie north 360 soul skate <b><span className="color-1">Thunder</span></b><br/> front foot impossible slap maxwell!</p>
                            <p className="font-large">Wants pawn term, dare worsted ladle:</p>
                              <div className="ui list large">
                                  <div className="item">
                                    <i className="angle right icon"></i> Stalefish crail slide regular footed
                                  </div>
                                  <div className="item">
                                    <i className="angle right icon"></i> Late nollie hard flip bone air
                                  </div>
                                  <div className="item">
                                    <i className="angle right icon"></i> Kick-nose sick front foot impossible
                                  </div>
                                  <div className="item">
                                    <i className="angle right icon"></i> Heel flip trucks slappy 
                                  </div>
                                  <div className="item">
                                    <i className="angle right icon"></i> Feeble lipslide aerial nollie
                                  </div>
                              </div>
                        </div>
                        <div className="column">
                          <div className="ui embed">
                                  <iframe src="https://player.vimeo.com/video/262100217?color=f08d0c&amp;portrait=0" width="640" height="360" frameBorder={0}></iframe>
                              </div>
                        </div>
                    </div>
                </div>
              </section>
              {/* <!-- MÓDULO 7 --> */}
              <section className="small-space bg-1">
            <div className="ui container">
              <div className="ui equal width grid stackable middle aligned">
                <div className="seven wide column">
                  <p className="head-title">
                    Darkslide coping fastplant slam front foot <strong><span className="color-1">impossible kidney</span></strong>.
                  </p>
                  <p>Deck ollie hole ho-ho mongo indy grab coper. Christ air backside face plant ollie north spine frontside JFA. Backside skate or die Pantsman half-flip impossible full-cab coffin. 
                  Casper Danny Way slide trucks g-turn kidney acid drop.</p>
                  <div className="ui hidden divider"></div>
                  <div className="ui items">
                    <div className="item">
                      <div className="top aligned content ">
                        <div className="header"><span className="color-1">FOOTED FLIP RIDE</span></div>
                        <div className="description">
                          <p>Tail bail manual wheels poseur rocket air Rudy Johnson feeble.</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="top aligned content">
                        <div className="header"><span className="color-1">STOKED CESS SLIDE</span></div>
                        <div className="description">
                          <p>
                            Fakie out nose grab Tony Magnusson kickflip g-turn lien air. Frigid air Chet Thomas pump sponsored nose blunt mongo. Bigspin crailtap kidney kick-nose launch ramp. Pop shove-it bank Christ air casper slide rocket air. Ollie cab flip front foot impossible camel back fastplant Alien Workshop. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="one wide column"></div>
                <div className="column">
                  <p className="head-title">Nosebone full pipe ho-ho axle set bruised heel <strong><span className="color-1">back hang up</span></strong>  rocket air hand rail.</p>
                  <p className="font-large">
                    <strong><span className="red-font">Wheels Primo slide trucks</span></strong> slob air cab flip hanger blunt.
                  </p>
                </div>
              </div>
            </div>
              </section>
              {/* <!-- MÓDULO 8 --> */}
              <section className="small-space">
            <div className="ui fluid container center aligned">
              <div className="ui equal width column grid padded stackable">
                <div className="sixteen wide column">
                  <div className="ui basic segment">
                    <p className="head-title">Depoiment Christ air frigid Air</p>
                    <p className="font-large">
                      Ollie hole tic-tac trucks hand rail Wade Speyer nosebone regular footed.
                    </p>
                  </div>
                </div>
                <div className="ten wide column centered" style={{overflow: 'hidden'}}>
                  <div className="swiper-container-depoiment">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="ui container segment">
                          <div className="ui equal width grid stackable middle aligned">
                            <div className="column">
                              <img src="https://dummyimage.com/900x600/5f27cd/fff" className="ui image" alt=""/>
                            </div>
                            <div className="column">
                              <p className="font-biggest">
                                Darkslide trucks Daggers coping sick tail wax risers. Fast plant poseur heel flip hip aerial tic-tac handplant.
                              </p>
                              <p><b>Kevin Harris Mark Gonzales</b></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="ui container segment">
                          <div className="ui equal width grid stackable middle aligned">
                            <div className="column">
                              <img src="https://dummyimage.com/900x600/1dd1a1/fff" className="ui image" alt=""/>
                            </div>
                            <div className="column">
                              <p className="font-biggest">
                                Sketchy fakie out tuna-flip bearings impossible rad. Front foot impossible melancholy 180 gnar bucket full-cab gap. 
                              </p>
                              <p><b>Rob Roskopp</b></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 9 --> */}
          <section className="medium-space bg-1">
            <div className="ui container">
              <div className="ui equal width column grid padded stackable middle aligned">
                <div className="column">
                  <img src="img/person.png" className="ui image centered" style={{marginBottom: -70 + 'px'}} alt=""/>
                </div>
                <div className="column">
                  <p className="head-title">Skate <b><span className="color-1">Thunder</span></b>front foot<br/>impossible!</p>
                            <p className="font-large">Wants pawn term, dare worsted ladle:</p>
                  <div className="ui embed">
                    <iframe width="560" height="315" src={'https://www.youtube.com/embed/SLD9xzJ4oeU?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1&mute=1'} frameBorder={0} allow="autoplay; encrypted-media"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 10 --> */}
          <section id="cardapio" className="small-space">
            <div className="ui container">
              <div className="ui grid stackable">
                <div className="sixteen wide column">
                  <div className="ui basic segment center aligned" style={{marginTop: 170 + 'px'}}>
                    <p className="head-title">CARDÁPIO PIZZA</p>
                    <p className="font-large">
                      <b>Horário de Atendimento para pizza:</b> todos os dias das 18h às 24h.
                    </p>
                  </div>
                  <div className="ui styled fluid accordion" style={{borderRadius: '0 !important', boxShadow: 'none'}}>
                              <div className="title" style={{marginTop: '0 !important', color: '#111', fontWeight: 900}}>
                                  <i className="dropdown icon"><span style={{color: '#fff', fontSize: 1 + 'px'}}>.</span></i>
                                  PIZZAS
                              </div>
                              <div className="content">
                                  <table className="ui very basic table striped selectable">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <p>01 - ALHO E ÓLEO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>mussarela e alho frito</small></p>
                                              </td>
                                              <td width="150">R$ 27,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>03 - ALMEIDA’S</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>lombo,rodelas de tomate, bacon e catupiry</small></p>
                                              </td>
                                              <td width="150">R$ 33,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>04 - A MODA DA CASA</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>calabresa, palmito, ovo, bacon, com catupiry</small></p>
                                              </td>
                                              <td width="150">R$ 32,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>06 - ATUM</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>atum sólido com cebola</small></p>
                                              </td>
                                              <td width="150">R$ 32,00</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>

                              <div className="title"  style={{marginTop: '0 !important', color: '#111', fontWeight: 900, margin: '15px 0!important', borderTop: 'none !important'}}>
                                  <i className="dropdown icon"><span style={{color: '#fff', fontSize: 1 + 'px'}}>.</span></i>
                                  PIZZAS DOCES
                              </div>
                              <div className="content">
                                  <table className="ui very basic table striped selectable">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <p>65 -BRIGADEIRO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>chocolate ao leite com chocolate granulado</small></p>
                                              </td>
                                              <td width="150">R$ 31,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>66 - PRESTíGIO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>chocolate ao leite com coco ralado</small></p>
                                              </td>
                                              <td width="150">R$ 32,00</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>

                              <div className="title"  style={{marginTop: '0 !important', color: '#111', fontWeight: 900, margin: '15px 0!important', borderTop: 'none !important'}}>
                                  <i className="dropdown icon"><span style={{color: '#fff', fontSize: 1 + 'px'}}>.</span></i>
                                  BORDAS

                              </div>
                              <div className="content">
                                  <table className="ui very basic table striped selectable">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <p>CATUPIRY</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 3,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>CHEDDAR</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 4,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>MUSSARELA</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 5,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>CHOCOLATE</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 4,00</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>

                              <div className="title"  style={{marginTop: '0 !important', color: '#111', fontWeight: 900, margin: '15px 0!important', borderTop: 'none !important'}}>
                                  <i className="dropdown icon"><span style={{color: '#fff', fontSize: 1 + 'px'}}>.</span></i>
                                  LANCHES
                                  
                              </div>
                              <div className="content">
                                  <table className="ui very basic table striped selectable">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <p>MISTO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão de forma, presunto e queijo</small></p>
                                              </td>
                                              <td width="150">R$ 5,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>AMERICANO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>presunto, queijo, ovo, alface, tomate e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 6,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-BURGUER</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, queijo, presunto, milho, batata palha</small></p>
                                              </td>
                                              <td width="150">R$ 6,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>HAMBURGUER</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, queijo, presunto, alface e tomate</small></p>
                                              </td>
                                              <td width="150">R$ 6,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-SALADA</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, queijo, presunto, milho, alface, tomate, batata palha e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 9,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-BACON</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, queijo, presunto, bacon, ovo e batata palha</small></p>
                                              </td>
                                              <td width="150">R$ 10,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-BACON SALADA</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, queijo, presunto, bacon, ovo, milho, tomate, alface e batata palha</small></p>
                                              </td>
                                              <td width="150">R$ 11,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-CALABRESA</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, queijo, presunto, calabresa, batata palha e maionese </small></p>
                                              </td>
                                              <td width="150">R$ 10,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-EGG</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, ovo, queijo, presunto, batata palha e maioneses</small></p>
                                              </td>
                                              <td width="150">R$ 9,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-EGG SALADA</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, ovo, queijo, presunto, milho, alface, tomate, batata palha e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 10,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-FRANGO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, frango, queijo, presunto, batata palha e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 9,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-FRANGO SALADA</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, frango, queijo, presunto, milho, alface, tomate, batata palha e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 10,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>CALAFRANGO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, frango, calabresa, queijo, alface, tomate, batata palha e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 10,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>X-TUDO</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, bacon, calabresa, ovo, queijo, presunto, milho, alface, tomate, batata palha e maionese</small></p>
                                              </td>
                                              <td width="150">R$ 13,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>TITANIC</p>
                                                  <p style={{marginTop: '-20px !important'}}><small>pão, hambúrguer, bacon, calabresa, ovo, queijo, presunto, milho, alface, tomate, batata palha e maionese (tudo em dobro) </small></p>
                                              </td>
                                              <td width="150">R$ 15,00</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>

                          </div>
                          <div id="almoco" className="ui basic segment center aligned">
                    <p className="head-title">CARDÁPIO ALMOÇO</p>
                    <p className="font-large">
                      <b>Horário de Atendimento para Almoço:</b> de Segunda à Sexta das 11h às 15h.
                    </p>
                  </div>
                  <div className="ui styled fluid accordion" style={{borderRadius: '0 !important', boxShadow: 'none'}}>
                              <div className="title" style={{marginTop: '0 !important', color: '#111', fontWeight: 900}}>
                                  <i className="dropdown icon"><span style={{color: '#fff', fontSize: 1 + 'px'}}>.</span></i>
                                  ALMOÇO
                              </div>
                              <div className="content">
                                  <table className="ui very basic table striped">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <p>CATUPIRY</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 3,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>CHEDDAR</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 4,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>MUSSARELA</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 5,00</td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <p>CHOCOLATE</p>
                                                  <p style={{marginTop: '-20px !important'}}>&nbsp;</p>
                                              </td>
                                              <td width="150">R$ 4,00</td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- MÓDULO 11 --> */}
          <section className="medium-space">
            <div className="ui container center aligned">
              <div className="ui equal width column grid padded stackable">
                <div className="sixteen wide column">
                  <div className="ui basic segment">
                    <p className="head-title">Dicas Vila dy Napolli</p>
                    <p className="font-large">
                      Conheça a história da pizza e como faze-la de modo simples!
                    </p>
                  </div>
                  <div className="ui hidden divider"></div>
                  <div className="ui two cards doubling">
                    <div className="card center aligned">
                      <a className="image">
                        <img className="ui image historia-pizza-link" src="img/historia.jpg" alt=""/>
                      </a>
                      <h3 className="area-title">A História da Pizza</h3>
                      <a className="historia-pizza-link">Saiba como começo essa história deliciosa.</a>
                    </div>
                    <div className="card center aligned">
                      <a className="image">
                        <img className="ui image receita-pizza-link" src="img/make.jpg" alt=""/>
                      </a>
                      <h3 className="area-title">Receita de Massa de Pizza</h3>
                      <a className="receita-pizza-link">Aprenda de forma rápida e fácil a preparar massa de pizza.</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* <?php include "include/footer.php";?>
          <?php include "include/modal.php";?>
          <?php include "include/script.php";?> */}
          <Footer/>
          <Modals/>
        </div>
        <script src="/scripts.js"></script>
      {/* </body> */}
      
    </Fragment>
  )
}
