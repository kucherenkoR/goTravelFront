export interface IAttraction {
  path: number;
  name: string;
  founded: number;
  description: string;
  id: number;
  street: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

export const attractions: IAttraction[] = [
  {
    path: require('../assets/attractions/ПамятникПетру.jpeg'),
    name: 'Памятник Петру I',
    founded: 1903,
    description:
      'Автор скульптурной части монумента — российский скульптор Марк Матвеевич Антокольский. Пьедестал выполнен одесским скульптором и владельцем художественно-бронзо-литейного завода Б. В. Эдуардсом, изготавливался недалеко от станции Казатин. Высота бронзовой фигуры Петра I равна 3,44 метра, вес — 1232 кг. Пьедестал выполнен из гранита. Высота пьедестала 5,4 метра, вес около 13 тонн. На лицевой грани пьедестала памятника выполнена надпись:Императору Петру I-му Таганрогъ 1698 — 1898 г',
    id: 1,
    street: 'Комсомольский сквер',
    coordinate: {
      latitude: 47.204995,
      longitude: 38.946431,
    },
  },
  {
    path: require('../assets/attractions/КаменнаяЛестница.jpeg'),
    name: 'Каменная лестница',
    founded: 1823,
    description:
      'Лестница была построена на средства таганрогского мецената греческого происхождения Герасима Фёдоровича Депальдо в 1823 году. В своём духовном завещании от 31 декабря 1822 года Депальдо написал: «Предназначено построить спуск на биржу между домами придворного советника Ковалинского и грека Христо».Автором проекта считается архитектор Франц Боффо. Вадим Кукушин в своей известной монографии «История архитектуры Нижнего Дона и Приазовья» пишет: «Идею строительства лестницы в Таганроге подал подполковник П. Македонский, а строительными работами руководил инженер Анисимов». Петр Иванович Македонский — надворный советник, таганрогский архитектор в 1800-1830-е годы, председатель комитета по управлению городских строений.',
    id: 2,
    street: 'ул. Греческая 58',
    coordinate: {
      latitude: 47.213073,
      longitude: 38.938153,
    },
  },
  {
    path: require('../assets/attractions/ДомикЧехова.jpeg'),
    name: 'Дом-музей А.П Чехова',
    founded: 1850,
    description:
      'Домик Чехова — мемориальный музей, расположенный в Таганроге в небольшом флигеле (ул. Чехова, 69), в котором родился А. П. Чехов.Построен из глинобитного кирпича, оштукатурен, выбелен. Площадь дома составляет 30,5 м². Расположен на территории бывшего домовладения таганрогского купца А. Д. Гнутова. В те времена здесь находились 3 небольших флигеля, каретный сарай и хозпостройки. Купец 3 гильдии П. Е. Чехов проживал с семьёй в этом флигеле с конца 1859 по март 1861 года. По всей видимости, Павла Егоровича Чехова привлекла к этому флигелю сходная цена за аренду, а также — близость к Петровской площади, где ему принадлежала бакалейная лавка. Именно здесь 29 января 1860 года родился третий сын Чеховых, Антон, будущий великий писатель.',
    id: 3,
    street: 'ул. Чехова 69',
    coordinate: {
      latitude: 47.206896,
      longitude: 38.931282,
    },
  },
  {
    path: require('../assets/attractions/ЛавкаЧеховых.jpeg'),
    name: 'Лавка Чеховых',
    founded: 1869,
    description:
      'Музей в городе Таганрог Ростовской области, основанный в 1975 году и открытый 3 ноября 1977 года. Расположен в доме 1840-х годов, который семья Чеховых арендовала в 1869—1874 годах. Входит в состав Таганрогского государственного литературного и историко-архитектурного музея-заповедника.Дом был построен в 40-х годах XIX века. Семья Чеховых арендовала его с 1869 по 1874 год. Антон Чехов прожил здесь с 9 до 14 лет.Семья жила на втором этаже дома, а внизу, на первом этаже, располагалась бакалейная лавка отца. По впечатлениям от встреч с людьми в этой лавке писателем позднее были созданы рассказы «Ванька», «Спать хочется», «Канитель», «Певчие», «Архиерей», «Отец семейства», «Тяжёлые люди» и др.Музей в доме был открыт 3 ноября 1977 года на основании Постановления ГК КПСС и Горисполкома Таганрога от 1 января 1975 года. Экспозиция создана, чтобы рассказать о детских годах А. П. Чехова. Представлен интерьер времён детства писателя, некоторые работы членов его семьи, а также семейные фотографии.13 мая 2011 года перед музеем был установлен памятник героям рассказа А. П. Чехова «Толстый и тонкий».',
    id: 4,
    street: 'ул. Александровская 100',
    coordinate: {
      latitude: 47.215943,
      longitude: 38.918042,
    },
  },
  {
    path: require('../assets/attractions/Алфераки.jpeg'),
    name: 'Дворец Алфераки',
    founded: 1848,
    description:
      'Дворец Н. Д. Алфераки — памятник архитектуры федерального значения в городе Таганроге Ростовской области. В нём находится музей — филиал Таганрогского государственного литературного и историко-архитектурного музея-заповедника.Архитектура дворца Алфераки представляет собой образец пышного южного необарокко. Здание украшают четыре коринфских колонны с классическими капителями. В центре фронтона помещен дворянский герб Алфераки. Крыша обрамлена балюстрадой. Внутри здания — мраморная лестница c 41 ступенями. Выходная дверь на бельведер украшена пилястрами с классическими капителями. В парадный зал ведет легкая арка. Зал состоит из трех отделений. В центральном отделении к центру потолка тянутся дуги, между которыми находятся фрески — медальоны из жизни версальских салонов эпохи Людовика XIV, XV и XVI: дамы и кавалеры в париках и роскошных костюмах. Орнаменты всех отделений зала выдержаны в стиле рококо.Дворец Алфераки был центром культурной жизни города. Его хозяин давал здесь грандиозные балы, на которые приглашалось избранное таганрогское общество.Рядом со дворцом, где жил Николай Дмитриевич Алфераки, был построен флигель коридорной системы. Там жили с учителями и гувернёрами сыновья старшего Алфераки – Николай, Ахиллес, Сергей и Михаил.',
    id: 5,
    street: 'ул. Фрунзе 41',
    coordinate: {
      latitude: 47.209207,
      longitude: 38.941747,
    },
  },
  {
    path: require('../assets/attractions/ДворецАлександра.jpeg'),
    name: 'Дворец Александра I',
    founded: 1806,
    description:
      'Дом градоначальника (в обиходе дворец Александра I) ― один из памятников истории и архитектуры Таганрога. Представляет собой одноэтажное каменное здание, построенное в стиле русского классицизма. Располагается по адресу: ул. Греческая, 40. Известно главным образом тем, что в 1825 году здесь скончался российский император Александр I.Особняк был построен в 1806 году чиновницей Сивере. В 1816 году здание было перестроено по проекту архитектора Ф. Молла и продано городу под квартиру градоначальника. Особняк в различные периоды принадлежал разным владельцам. Наиболее значительным из них был градоначальник Таганрога Пётр Папков, который купил его спустя четыре года после постройки. Император Александр I останавливался здесь дважды ― в 1818 и 1825 годах. Последний визит стал для него роковым. Александр I умер здесь 19 ноября от лихорадки. После его смерти дом был выкуплен вдовствующей императрицей Елизаветой Алексеевной. Здесь же был создан первый мемориальный музей в России, посвящённый императору. Дворец Александра I посещали Александр II и Александр III, поэты Василий Жуковский и Александр Пушкин с сопровождавшими писателя по дороге в ссылку генералом Николаем Раевским и его дочерью Марией Волконской, художник Иван Айвазовский, нарком просвещения Анатолий Луначарский, оставивший в книге посетителей следующую запись: «Этот старинный уголок необходимо сохранить как исторический бытовой памятник, главным образом, для учебных целей…».В течение 12 лет, начиная с 1864 года, любительский хор, дирижёром которого был Павел Чехов (отец Антона Павловича Чехова) выступал в домовой Воздвиженской церкви, которая была обустроена в особняке в память об императоре. В конце 1860-х ― начале 1870-х годов Александр, Николай и Антон Чеховы также пели в этом хоре. В 1928 году музей был закрыт, а некоторые его экспонаты были перемещены во дворец Алфераки.',
    id: 6,
    street: 'ул. Греческая 40',
    coordinate: {
      latitude: 47.21354,
      longitude: 38.928425,
    },
  },
  {
    path: require('../assets/attractions/МузейГрад.jpeg'),
    name: 'Музей Градостроительства и быта',
    founded: 1912,
    description:
      'Музей Градостроительства и быта — единственный в России музей градостроительства и быта.Расположен в особняке «Дома Шаронова», отнесённом Указом Президента Российской Федерации № 176 от 20 февраля 1995 года к памятникам архитектуры РФ. Входит в состав Таганрогского государственного литературного и историко-архитектурного музея-заповедника.Музей «Градостроительство и быт г. Таганрога» имеет значительную архитектурную ценность для Таганрога, находится в оживленном городском центре. Старинное здание (ранее дом хлеботорговца Е. И. Шаронова) — архитектурный и культурный памятник в стиле «модерн», был возведён в 1912 году, автором проекта был друг А. П. Чехова, академик-архитектор Ф. О. Шехтель.Музей был открыт по постановлению ГК КПСС и исполкома Таганрогского городского Совета 3 ноября 1981 года с целью изучения и популяризации исторических и культурных памятников г. Таганрога. Музей находится в бывшем особняке крупного таганрогского помещика Е. И. Шаронова. Здание было построено в 1912 году в стиле модерн по проекту академика архитектуры Ф. О. Шехтеля. До 1917 года здание принадлежало Е. И. Шаронову. С 1920 по 1922 год в здании размещалась шелководческая станция, с 1923 года — детская поликлиника.Во время оккупации Таганрога здание было занято штабом 1-й танковой армии Э. фон Клейста.После 1944 года в здании размещались различные городские организации, включая Орджоникидзевский РК КПСС.С 1981 года в здании располагается музей «Градостроительство и быт Таганрога». Созданием экспозиции музея руководила Л. А. Цымбал. В экспозиции представлены районы старого Таганрога, старинные фото, открытки, городские планы, образцы мебельного и декоративного искусства XVIII—XX веков, изделия из русского и западно-европейского стекла, демонстрирующие особенности стиля быта города с петровских времён до настоящего времени. В цокольном этаже здания музея находятся четыре выставочных зала, в которых, помимо основной экспозиции, музей ведёт активную выставочную работу, предоставляя свои площади для современных художников, скульпторов, коллекционеров, а также разнообразных передвижных выставок.',
    id: 7,
    street: 'ул. Фрунзе 80',
    coordinate: {
      latitude: 47.218609,
      longitude: 38.921048,
    },
  },
  {
    path: require('../assets/attractions/Вокзал.jpeg'),
    name: 'Станция Таганрог',
    founded: 1869,
    description:
      'Старый вокзал / Таганро́г II — тупиковая железнодорожная станция Ростовского региона Северо-Кавказской железной дороги, находящаяся в городе Таганроге на Площади Восстания. Станция имеет прямой выход на грузовую станцию Марцево и пассажирскую Таганрог-Пассажирский. Используется в основном для приёма/отправки и отстоя грузовых составов, подачи и уборки вагонов в морской порт, Тагмет, Красный котельщик, другие предприятия города.Станцией в разное время руководили Н. П. Дьяченко (более 25 лет), С. Н. Полтавский, С. Л. Завадовский, В. В. Борух, Ю. И. Войников.Здание вокзала является объектом культурного наследия регионального значения. Принят под охрану решением Малого совета Ростовского облсовета № 301 от 18 ноября 1992 года.Двухэтажное здание вокзала построено в 1869 году из красного кирпича, без применения штукатурки, с узорчатой кладкой. Архитектор — С. И. Загоскин. Здание вокзала представляет собой типичный образец краснокирпичной эклектики, популярной в Ростове и Таганроге.Строительные работы вел видный предприниматель Я. С. Поляков с 23 июня до декабря 1869 года.Своеобразие зданию придают разновысокие окна, арочные ниши, причудливые аттики. До наших дней здание сохранилось в неизменном виде, кроме исчезнувшей одноэтажной пристройки слева. Железнодорожная станция была небольшая, но имела красивую крытую платформу, что защищало пассажиров от солнца и осадков. Около тяжёлого колокола располагался сторож, дававший сигнал отправления поездам. На левой этакаде находилась вокзальная часовня, которую разрушили в 1920-е годы. Станция имела локомотивное депо (депо называлось «стойло») на 12 единиц, с оборотным кругом, позволявшим менять направление движения поездов.Торжественное открытие железной дороги в Таганроге состоялось 4 января 1870 года (23 декабря 1869 года по старому стилю). Почти 100 лет Таганрог имел единственную тупиковую станцию. После строительства в 1962 году «Нового вокзала», названного «Таганрог I», старый вокзал получил имя «Таганрог II».',
    id: 8,
    street: 'пл. Восстания 1',
    coordinate: {
      latitude: 47.215606,
      longitude: 38.92117,
    },
  },
  {
    path: require('../assets/attractions/Гимназия.jpeg'),
    name: 'Гимназия им. А.П. Чехова',
    founded: 1806,
    description:
      'Гимна́зия имени А. П. Чехова — старейшее учебное заведение Юга России, основанное в Таганроге в 1806 году.Первым директором гимназии был назначен генерал-майор Николай Трегубов. Первоначально гимназия размещалась в здании, предназначавшемся для квартиры градоначальника и пожертвованном им для этой цели. Список учеников, поступивших в 1807 году, включал 126 человек. Первый выпуск состоялся в 1811 году.В гимназии преподавались такие предметы, как эстетика, риторика, грамматика, психология, логика, нравственная философия, математика, физика, технология, история, география, статистика, политическая экономия, право, естественная история, коммерция, бухгалтерия, рисование, языки ново- и древнегреческий, французский, немецкий, итальянский, латинский. Преподавание Закона Божьего было введено в 1817 году. Согласно первому уставу, введённому в России 5 ноября 1804 года, в гимназиях русский язык не изучали, полагая, что владение им само собой подразумевается. Ввели изучение русского языка только в 1819 году.',
    id: 9,
    street: 'ул. Октябрьская 9',
    coordinate: {
      latitude: 47.221173,
      longitude: 38.914703,
    },
  },
  {
    path: require('../assets/attractions/Худ.jpeg'),
    name: 'Таганрожский художественный музей',
    founded: 1898,
    description:
      'Таганрогский художественный музей — художественный музей в Таганроге, основанный в 1898 году, в год 200-летия Таганрога. Коллекция насчитывает более 7 тыс. единиц.Идея создания в Таганроге городского музея принадлежала А. П. Чехову. По просьбе Чехова И.Е. Репин обратился в Совет Академии художеств с ходатайством о передаче таганрогскому городскому музею картин русских живописцев. В 1902 г. Академия художеств выделила Таганрогскому музею 8 картин, среди которых были такие значительные произведения, как «Сосна над обрывом» и «Река Луга» Ю.И. Феддерса, «Запорожец на разведках» С.И. Васильковского. В дар музею передавали свои работы художник К. А. Савицкий (картина «Отец»), П.Ф. Иорданов. Петербургская академия художеств несколько раз передавала музею картины, среди которых работы художников И.Я. Билибина, А.К. Саврасова, Б.Н. Мешкова и др. Петербургское общество им. А.И. Куинджи выделило музею этюды Куинджи «Волны», «Радуга» и «Деревня».В 1920-е годы музей пополнился национализированными произведениями, переданными Государственным музейным фондом, Музеем керамики, Государственным Русским музеем. Среди эти работ - около 100 произведений известных русских художников И.К. Айвазовского, И.Е. Маковского, Н.Я. Ярошенко и др. В годы Великой Отечественной войны музей понес потери. Погибли известные полотна И.И. Шишкина, И.Н. Крамского, И.И. Левитана и др., была разграблена коллекция фарфора. В 1960-1990-е годы значительные поступления в музей делали московские коллекционеры Л. А. Русланова, И. А. Мясникова-Мамонтова, А.А. Абрамян, Е. Ф. Вишневский, Л.Н. Каган и др. Они передали музею полотна художников К.Е. Маковского, И.И. Левитана, В.А. Серова, К.А. Коровина, И. Е. Репина, Г. Г. Мясоедова, Г. Г. Чернецова, В. Д. Поленова, С. Ю. Судейкина и др. Обладая значительными фондами, музей стал в состоянии представлять русское искусство на разных этапах его развития.',
    id: 10,
    street: 'ул. Александровская 56',
    coordinate: {
      latitude: 47.210186,
      longitude: 38.930604,
    },
  },
  {
    path: require('../assets/attractions/Театр.jpeg'),
    name: 'Таганрожский театр им. А.П. Чехова',
    founded: 1827,
    description:
      'Таганрогский драматический театр имени А. П. Чехова осован в 1827 году. Современное здание было построено в 1866 году по проекту итальянского архитектора К. Лондерона и Н. В. Трусова. В 1944 году таганрогскому театру было присвоено имя А. П. Чехова.В 1808 году, когда обсуждался первый генеральный план Таганрога, таганрогское городское самоуправление запросило об устройстве театра в городе. Предполагалось, что это будет отдельно стоящее здание в центральной части города.В 1827 году группа драматических артистов под управлением неслужащего дворянина Петровского организовала первый творческий коллектив театра. В то время крепостной театр располагался в амбарной пристройке в доме купца Караяни по адресу: ул. Петровская, 27 (ныне — 55). В 1828 году у помещика Е. Корнеева городскими властями за 15 000 рублей приобретены 13 крепостных музыкантов с инструментами и нотами.В первоначальном виде труппа актёров просуществовала почти без изменений в течение 20 лет, не раз выезжая с гастролями в Ростов-на-Дону, Новочеркасск. Наряду с популярными в то время комедиями и водевилями в репертуаре театра значились постановки по классическим пьесам Шекспира, Гоголя. В 1845 году Таганрогский театр был в числе первых, поставивший на своей сцене пьесу Грибоедова «Горе от ума», за что режиссёр Петровский был уволен.',
    id: 11,
    street: 'ул. Петровская 90',
    coordinate: {
      latitude: 47.216111,
      longitude: 38.928527,
    },
  },
];
