import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/bootstrap.css';
import '../styles/Custom.css';
import '../img/pavlov.png';
import '../img/job-1.jpg';
import '../img/job-2.jpg';
import '../img/job-3.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

function BasicExample() {
  return (
    <Router>
      <div class="fluid d-flex flex-column mvh-100">
        <header>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container d-flex justify-content-between">
              <nav class="navbar navbar-expand-lg">
                <Link class="navbar-brand" to="/">Главная</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <Link class="nav-link" to="/skills">Навыки</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/experience">Опыт работы</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />

        <footer class="footer mt-auto py-3 bg-dark text-white">
          <div class="container">
          <p class="float-right m-0">
            <a href="#">Наверх</a>
          </p>
          <p class="m-0">Павлов Антон ©</p>
          </div>
        </footer>
      </div>
      
    </Router>
  );
}

function Home() {
  return (
    <section class="jumbotron text-center">
    <div class="container text-white">
      <img src="/img/pavlov.png" class="w-25 rounded-circle m-3" />
      <h1 class="jumbotron-heading text-white m-3">Павлов Антон</h1>
      <p class="lead">Приветствую Вас на тестовом сайте моего резюме.</p>
      <p class="lead">Знакомство с разработкой сайтов началось еще в далеком 2007 году, но именно зарабатывать на сайтах я начал завершив ВУЗ с 2012 года. Всё начиналось как хобби,
      но как трафик на своих проектах начал расти с сотен до тысяч посетителей в день, а доходность с проектов стала больше, чем зароботная плана на основной работе, я понял, веб-мастер - это моя профессия.</p>
      <p class="lead">Но желание из веб-мастера перерасти в более узконаправлению профессию Frontend-разработчик сейчас во мне борется очень активно</p>
      <p class="lead m-3">От чего и появилась этот мини-сайт :)</p>
      <p>
        <a href="tel:8-937-410-00-03" class="btn btn-primary m-2"><i class="fas fa-mobile-alt mr-2"></i>8-937-410-00-03</a>
        <a href="mailto:pavlovav90@gmail.com" class="btn btn-secondary m-2"><i class="far fa-envelope mr-2"></i>pavlovav90@gmail.com</a>
      </p>
    </div>
  </section>
  );
}

function Skills() {
  return (
    <div class="album py-5 block-1">
    <div class="container">

      <h1 class="text-center pb-4">Навыки</h1>

      <div class="owl-carousel owl-theme">

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">HTML/CSS</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">Знакомство с HTML/CSS прошло еще в школьные годы в далеком 2007 году, но зарабатывать на сайтах начал завершив ВУЗ с 2012 года. Всё начиналось как хобби, но как трафик на своих проектах начал расти с сотен до тысяч, понял - это моя профессия.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">Адаптивная вёрстка</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">Задача над изучением адаптива появилась перед мной в середине 2016 года, когда нужно было сделать "резиновый" дизайн сайта ПГУ, сайта с более чем 200 файлами шаблонов и на тот момент 20 модулями. Теперь это неотъемлемая часть моей профессии.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">Bootstrap</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">К Bootstrap я пришёл чуть-чуть позже, когда пришлось вливаться в команду. Писать долгие мануалы по своим кускам кода - утомительно, а доводить его до других 3-4 разработчиков еще более скучно. Отсюда и пал выбор на самый популярный в своем роде Bootstrap.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">PHP</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">C PHP знаком совсем немного. В своих проектах, в фрилансе, на основной работе задачи по функционалу были и их нужно было решать, приходилось что то писать, подключать БД, парсить со сторонних сайтов и т.д.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">Linux (Centos)</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">Для общего понимания, хотя бы в общих чертах, для создания приложения или сайта нужно знать, как развернуть "джентельменский набор" на веб-сервер: PHP, Apache, Nginx, fail2ban, npm и т.д.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">Аналитика</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">Основа успешности большинства проектов. Чтобы зарабатывать на трафике, с ней приходилось работать довольно много на своем сайте wot-fan.com. Начиная от простого юзабилити, заканчивая мониторингом конкурентов.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">SEO-оптимизация</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">Как внутренняя, так и внешняя. Проводя аналитику площадок, для своих проектов закупался ссылками\статьями и т.д. Внутреннюю же оптимизацию провожу на всех проектах, которых касаюсь. Иногда приходилось заниматься и копирайтингом, занимая ТОП-3 по ВЧ в ПС.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">Продвижение</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">В своих проектах был опыт работы с контекстной рекламой (Яндекс Директ), с агрегаторами (Seopult.ru) при небольшом бюджете. В основном этот опыт был положительным только по закупке статей и ссылок. Основная цель была получить трафик, а не продавать продукцию.</p>
          </div>
        </div>

        <div class="item card">
          <div class="card-header">
            <h4 class="m-0 text-center">Adobe Photoshop</h4>
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">Хочешь красивый проект - рисуй, не хочешь - не рисуй. Всё просто. Но если это твой проект и доходность зависит от трафика - рисовать ты будешь: элементы дизайна, текстуры, изображения для контента и т.д.</p>
          </div>
        </div>

     </div>
    </div>
  </div>
  );
}

function Experience() {
  return (
    <div class="container py-5">
      <h1 class="text-center pb-4">Опыт работы <span class="text-muted">(6 лет 8 месяцев)</span></h1>
       <div class="row d-flex align-items-center">
         <div class="col-md-9">
           <h2>Заведующий лабораторией "Интернет технологии"</h2>
           <p class="lead text-muted font-weight-bold">
             Январь 2015 — по настоящее время
           </p>
           <p class="lead text-muted">
             Пензенский государственный университет (Пенза)
           </p>
           <p class="lead">Сопровождение портала pnzgu.ru и техническая поддержка 250 поддоменов ПГУ. Работа велась по нескольким направлениям:
             <ul>
               <li>Работа с контентом в больших объемах;</li>
               <li>Разработка текущего дизайна портала и адаптивная вёрстка;</li>
               <li>Аналитика и внутренняя оптимизация сайта (повышение всех статистических показателей портала, некоторых в 2 и более раза за 4 года: посещаемость, отказы, глубина просмотра, время на сайте по данным Яндекс.Метрики и повышение позиций с 200+ места до 54 места в РФ в мировом рейтинге сайтов ВУЗов Webometrics. Общая сводка доступна на сайте ПГУ по ссылке ui.pnzgu.ru/dep/inftech/l_it/site_pnzgu);</li>
               <li>Техническая поддержка, массовое обучение сотрудников ВУЗа для работы с поддоменами (лекции, вебинары);</li>
               <li>Приведение контента, разделов сайта в соответствие с требованиями Рособрнадзора (микроразметка нескольких разделов, частичная автоматизация размещаемого контента).</li>
             </ul>
           </p>
         </div>
         <div class="col-md-3">
           <img class="w-100 rounded-circle" src="img/job-3.jpg"/>
         </div>
       </div>
       <hr/>
       <div class="row d-flex align-items-center">
         <div class="col-md-9 order-md-2">
           <h2>Заместитель директора по коммерческим вопросам</h2>
           <p class="lead text-muted font-weight-bold">
             Февраль 2013 — Июль 2013
           </p>
           <p class="lead text-muted">
             МУП «Жилищное хозяйство» (Сердобск)
           </p>
           <p class="lead">Вёл учёт по заключению договоров организации с физическими и юридическими лицами, проводил встречи с клиентами. Разработал сайт МУП ЖХ г. Сердобска (jh-serdobsk.ru), а в дальнейшем освещал на сайте работу организации.</p>
         </div>
         <div class="col-md-3 order-md-1">
           <img class="w-100 rounded-circle" src="img/job-2.jpg"/>
         </div>
       </div>
       <hr/>
       <div class="row d-flex align-items-center">
         <div class="col-md-9">
           <h2>Дизайнер-маркетолог</h2>
           <p class="lead text-muted font-weight-bold">
             Февраль 2013 — Июль 2013
           </p>
           <p class="lead text-muted">
             Рекламное агентство Позитив (Сердобск)
           </p>
           <p class="lead">Создавал и разрабатывал дизайн для юридических лиц. Работал с такими категориями дизайна как: дизайн сайтов, логотипы, полиграфический дизайн, фирменный стиль, баннеры, наружная реклама, дизайн выставочных стендов. При необходимости занимался монтажом. Разрабатывал под заказ сайты.</p>
         </div>
         <div class="col-md-3">
           <img class="w-100 rounded-circle" src="img/job-1.jpg"/>
         </div>
       </div>
       <hr class="featurette-divider"/>
     </div>
  );
}

export default BasicExample;
