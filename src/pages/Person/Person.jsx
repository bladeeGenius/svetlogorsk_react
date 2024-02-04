import React from 'react'
import styles from './Person.module.css'

import Header from '../../components/Header/Header'

const Person = () => {
    return (
        <div className={styles.wrapper}>
            <Header activeButtonIndex={3}/>

            <h2 align="center" style={{marginTop: "1.2rem"}}>Изяслав Григорьевич Котляров</h2>
            <div className={styles.info}>
                <div className={styles.photo}>
                    <img src="/svetlogorsk_react/Izaslav.jpg" alt="person" />
                </div>

                <div className={styles.poem}>
                    <p>
                        Кому-то Родина — в укор, <br />
                        а ты к ней — с покаяньем… <br />
                        В окне дыхания простор, — <br />
                        не заблудись дыханьем. <br />
                        Ты столько лет себе мешал, <br />
                        когда в себе скитался! <br />
                        Ты столько лет не там дышал, <br />
                        вернее, задыхался! <br />
                        Как птица прячется в гнезде, <br />
                        так ты в квартирах прятал себя… <br />
                        И жил, и жил везде, <br />
                        забыв о том, — где надо. <br />
                        И все же солнечный пределты <br />
                        ощутил у жизни: <br />
                        жить можно, где б ни захотел, <br />
                        а вот дышать — в Отчизне. <br />
                    </p>
                </div>
            </div>

            <div className={styles.biography}>
                <h3 align="center" className={styles.sectionTitle}>Биография</h3>
                <div className={styles.paragraphWrapper}>
                    <p className={styles.pharagraphText}>
                        Родился 21 февраля 1938 года в г. Чаусы Могилевской области. Детские и юношеские годы прошли в Могилёве. Окончил факультет журналистики Белорусского государственного университета. Работал литсотрудником в газете лётчиков гражданской авиации «Западная трасса».
                        В 1966 году переехал на постоянное жительство в город Светлогорск Гомельской области. Почти 35 лет отдал работе в районной газете «Светлагорскія навіны»: литсотрудник, ответственный секретарь, заместитель редактора. Многие публикации И.Г. Котлярова стали журналистской летописью города и района. Автор истории Светлогорского строительного треста №20 (брошюра «Ровесник города») и Светлогорского домостроительного комбината («Домостроители»). Один из авторов книги «Малады горад на старажытнай зямлі», а также энциклопедического справочника «Сузор’е беларускага памежжа» (Минск, 2014).
                        Член Союза журналистов СССР с 1965 года (теперь – Белорусский союз журналистов).
                        С 1990 года – член Союза писателей СССР. С 2002 года – член Союз писателей Беларуси и Союза российских писателей.
                        Изяслав Котляров,1992 г.
                        Один из инициаторов и создателей Светлогорской картинной галереи «Традиция» имени Германа Прянишникова (1992), которую возглавлял с дня основания по 2008 год.
                        Автор брошюры о картинной галерее («Верность традициям»), каталога о творчестве Г.М. Прянишникова. Регулярно выступал в периодической печати со статьями о творчестве известных художников Беларуси.
                        Член редколлегии журнала «Государственный контроль» со дня его основания в 2011 году по 2018 год. На протяжении всего этого времени вёл в нём раздел «Духовное пространство», опубликовал серию интервью с выдающимися деятелями Беларуси и России.
                        Инициатор возведения в Светлогорске памятника шляхтичу Шатиле, мемориальных комплексов «Операция "Багратион"» и «Ола» на территории Светлогорского района.
                        Благодаря инициативе И.Г. Котлярова г. Светлогорск Гомельской области стал побратимом г. Светлогорска Калининградской области.
                        Неоднократно избирался депутатом городского Совета, был председателем Светлогорского райкома профсоюза работников культуры, руководителем районной организации Союза журналистов, помощником депутата Верховного Совета БССР, а затем Палаты представителей Национального собрания Республики Беларусь А.С. Якобсона, первым председателем районного общественного объединения «Таварыства беларускай мовы імя Ф. Скарыны», руководил районным литературным объединением «Далягляды».
                    </p>
                </div>
            </div>

            <div className={styles.art}>
                <h3 align="center" className={styles.sectionTitle}>Творчество</h3>
                <div className={styles.paragraphWrapper}>
                    <p className={styles.pharagraphText}>
                        Автор 44 книг поэзии и прозы, вышедших в Минске, Москве и Санкт-Петербурге: «Мой ровесник» (1975), «Конфетное дерево» (1980), «Друзья мои – свидетели мои» (1981), «Здесь, на трепетной земле» (1989), «На расстоянии взгляда и души» (1990), «Фантазия реальности бедней» (совм. с С. Шах, 1993), «А душа и в молитве болит» (1994), «Наш двор» (совм. с С. Шах, 1997), «Но даже умираем, чтобы жить» (1999), «Россыпь» (2000), «Земля простит, но не прощает небо» (2001), «Куда б ни шёл – иду к своей судьбе» (2002), «Вечное время во мне» (2003), «Сам себе дорога» (2004), «И гром, словно эхо войны» (2005), «По ту и эту сторону окна» (2006), «Сначала жизнь – потом судьба» (2007), «Диалог – Дыялог» ч.1 (совм. с С. Шах, 2007), «Диалог – Дыялог» ч.2 (совм. с С. Шах, 2008), «Перазоў – Перезов» (совм. с С. Шах, 2009), «Принял я крещение от клёна»(2009), «Сирень на пепелище» (2010), «В днях, к самозабвенью не готовых…» (2010), «Зовущая печаль» (2010), «Побег из детства» (2011), «Небесная весть» (2012), «Ученик вечности» (2013), «Верность» (2015), «Ещё за далью и за высотой» (2015), «Неизъяснимое» (2015), «Из полуяви и полузабвений» (2017), «Эхо зова» (2017), «Под глубиною высоты» (2019), «О, Беларусь, ты – гербная держава!» (2019), «Участь» (2020), «Судьбою называемый экспромт» (2020), «Замковое время Беларуси» (2020), «Бридский мох» (2020), «Месяцеслов» (2020), «Побег их детства» (повесть дополненная, 2020), «Моё духовное пространство» (2021), «Война – время подвигов и трагедий» (2021), «Приближение к абсолюту» (2022), «Время всех времён» (2023).
                        Изяслав Котляров с женой Софьей Шах, 2008 г.
                        Стихи И.Г. Котлярова публиковались в журналах «Знамя», «Юность», «Нева», «Аврора», «Форум», «Смена», «Неман», «Немига литературная», «Наш современник», «Москва», «Дружба народов», «Студенческий меридиан», «Новый журнал» (Нью-Йорк), в альманахах «День поэзии» (Москва), «Поэтический Олимп» (Москва), «Встречи» (Филадельфия), в «Литературной газете», «Литературной России» и др. изданиях.
                        Автор переводов на русский язык произведений более 50 известных белорусских поэтов, среди которых Я. Купала, Я. Колас, М. Богданович, Р. Бородулин, С. Граховский, П. Панченко, Т. Бондарь, А. Сербантович, А. Гречаников, Р. Боровикова, С. Шах, М. Метлицкий, В. Макаревич, а также книги Софьи Шах «Сияющая милость». Переводы публиковались в «Литературной газете», журнале «Дружба народов», «Новый журнал» (Нью-Йорк), «Аврора», «Неман», в антологии «Из века в век. Белорусская поэзия» … Cтихи И. Котлярова в переводах на белорусский язык С. Шах и М. Метлицкого были опубликованы в журналах «Полымя», «Беларусь», «Маладосць», в еженедельнике «Літаратура і мастацтва».
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Person