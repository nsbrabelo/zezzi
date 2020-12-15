import { Component, Fragment } from 'react'

export class Header extends Component {
    render() {
        return (
            <Fragment>

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
                                            <img src="/img/logo.png"/>
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
            </Fragment>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <footer className="small-space bg-1">
                <div className="ui container">
                    <div className="ui basic segment center aligned">
                        <p>Pizzaria Vila Dy Napoli</p>
                        <p>
                            <b>Endereço:</b> Rua Conselheiro João Alfredo, 376 • Macuco • Santos <br/>
                            <span className="font-biggest color-1"><b>Disk Delivery :</b> 13 3272-5600 | 13 3272-5900 | 3261-2598</span>
                        </p>
                        <div className="ui divider"></div>
                        <div className="ui list horizontal">
                            <div className="item">Siga-nos:</div>
                            <a href="https://www.facebook.com/PizzariaVilaDyNapolli" className="item"><i className="square facebook icon large"></i></a>
                            <a href="#0" className="item"><i className="instagram icon large"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export class Modals extends Component {
    render() {
        return (
            <div>
                <div className="ui modal historia-pizza">
                <i className="close icon"></i>
                <div className="header">A História da Pizza</div>
                <div className="content">
                    <p> A história da pizza começou com os egípcios. Acredita-se que eles foram os primeiros a misturar farinha com água. Outros afirmam que os pioneiros são os gregos, que faziam massas a base de farinha de trigo, arroz ou grão-de-bico e as assavam em tijolos quentes. A novidade foi parar na Etrúria, na Itália.
                    Ao contrário do conhecimento popular, apesar de tipicamente italiana, os babilônios, hebreus e egípcios já misturavam o trigo e amido e a água para assar em fornos rústicos há mais de 5000 anos. A massa era chamada de "pão de abraão", muito parecida com os pães árabes atuais, e recebia o nome de piscea.</p>
                    <p>Os fenícios, três séculos antes de Cristo, costumavam acrescentar coberturas de carne e cebola ao pão; os turcos muçulmanos adotavam esse costume durante a Idade Média e por causa das cruzadas essa prática chegou à Itália pelo porto de Nápoles, sendo em seguida incrementada dando origem à pizza que conhecemos hoje.
                    No início de sua existência, somente as ervas regionais e o azeite de oliva eram os ingredientes típicos da pizza, comuns no cotidiano da região. Os italianos foram os que acrescentaram o tomate, descoberto na América e levado a Europa pelos conquistadores espanhóis. Porém, nessa época a pizza ainda não tinha a sua forma característica, redonda, como a conhecemos hoje, mas sim dobrada ao meio, feito um sanduíche ou um calzone.</p>
                    <p>A pizza era um alimento de pessoas humildes do sul da Itália, quando, próximo do início do primeiro milênio, surge o termo "picea", na cidade de Nápoles, considerada o berço da pizza. "Picea", indicava um disco de massa assada com ingredientes por cima. Servida com ingredientes baratos, por ambulantes, a receita objetivava "matar a fome" principalmente da parte mais pobre da população. Normalmente a massa de pão recebia como sua cobertura toucinho, peixes fritos e queijo.</p>
                    <p>A fama da receita correu o mundo e fez surgir a primeira pizzaria que se tem notícia, a Port'Alba, ponto de encontro de artistas famosos da época, tais como Alexandre Dumas, que inclusive citou variações de pizzas em suas obras. Chegou ao Brasil da mesma forma, por meio dos imigrantes italianos, e hoje pode ser encontrada facilmente na maioria das cidades brasileiras. Até os anos 1950, era muito mais comum ser encontrada em meio à colônia italiana, tornando-se logo em seguida parte da cultura deste país. A partir de 1985, comemora-se o dia da pizza aos 10 de julho.</p>
                    <p>Foi no Brás, bairro paulistano dos imigrantes italianos, que as primeiras pizzas começaram a ser comercializadas no Brasil. Segundo consta no livro Retalhos da Velha São Paulo, escrito por Geraldo Sesso Jr., que o napolitano Carmino Corvino, o Dom Carmeniélo, dono da já extinta Cantina Santa Genoveva, instalada na esquina da Avenida Rangel Pestana com a Rua Monsenhor Anacleto, inaugurada em 1910, passou a oferecer as primeiras pizzas da cidade. Aos poucos, a pizza foi-se disseminando pela cidade de São Paulo, sendo abertas novas cantinas. As pizzas foram ganhando coberturas cada vez mais diversificadas e até mesmo criativas. No princípio, seguindo a tradição italiana, as de muçarela e anchova eram as mais presentes, mas à medida que hortaliças e embutidos tornavam-se mais acessíveis no país, a criatividade dos brasileiros fez surgir as mais diversas pizzas.</p>
                </div>
            </div>

            <div className="ui modal receita-pizza">
                <i className="close icon"></i>
                <div className="header">Receita de Massa de Pizza</div>
                <div className="content">
                    <p>Ingredientes</p>
                    <div className="ui list bulleted">
                        <div className="item">1 Kg de farinha de trigo</div>
                        <div className="item">30 g de fermento biológico</div>
                        <div className="item">3 xícaras de água morna</div>
                        <div className="item">3/4 xícara de óleo</div>
                        <div className="item">1 colher de chá de sal</div>
                        <div className="item">2 colheres de chá de açúcar</div>
                    </div>
                    <p>Modo de Preparo</p>
                    <div className="ui list ordered">
                        <div className="item">Dissolva o fermento, o sal e o açúcar em um pouco de água morna</div>
                        <div className="item">Junte um pouco de farinha e o óleo</div>
                        <div className="item">Misture tudo e acrescente o restante da farinha alternado com a água até desgrudar das mãos</div>
                        <div className="item">Deixe crescer por 30 minutos</div>
                        <div className="item">Abra os discos e pincele o molho</div>
                        <div className="item">Fure a massa com um garfo e leve ao forno por 15 minutos</div>
                        <div className="item">Pode ser congelada em seguida ou recheada e levada novamente ao forno para assar</div>
                    </div>
                </div>
            </div>

            <div className="ui modal mini horario">
                <i className="close icon"></i>
                <div className="header">Horário de Funcionamento</div>
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
            </div>
        )
    }
}