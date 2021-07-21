export const about_courses = {
  desc: `
  # Cui ne adresam
  
  Acest curs se adreseaza persoanelor la inceput de drum si celor cu cunostinte medii. Au fost persoane care deja aveau cunostintele de baza si au participat doar la cursul de React (10 sedinte)

  Dupa 4 ani de experienta in predarea acestor cursuri (saptamana dupa saptamana) si > 20 de ani ca si programator am observat cateva stereotipuri a persoanelor care vor sa invete singuri programare. 

  Combinatii ale topicurilor de mai jos:
  - Parcurg teoria de pe w3schools
    - Partea pozitiva este ca vor sa asimileze informatia, insa toti, absolut toti participantii la curs, au intampinat urmatoarele probleme.
        - Pierd mult timp sa inteleaga singuri situatiile din viata reala unde se foloseste un anumit lucru. De exemplu de ce exista map, care sunt avantajele/dezavantajele folosirii acestei functii.
        - Citesc/studiata si testeaza anumite functii existente insa nu acopera cu exercitii de algoritmica pentru o mai buna intelegere a acestora. Acest lucru e foarte normal avand in vedere ca aproape toate documentatiile online se refera doar la aceea mica parte de teorie fara sa faca legatura cu alte abordari si similitudine cu lumea reala  si exercitii de algoritmica. Noi o sa facem mai mult de 200 de exercitii de acest gen!
        - Lipsa unui feedback din partea unei persoane experimentate. 
        - Apare indoiala in urma intrebarii:  *oare chiar o sa-mi foloseasca ce invat?* 
        - Foarte important! Peste 50% din persoane incep prin asimilarea cunostintelor de **HTML** si **CSS**. Acest lucru pare perfect normal, nu? Din moment ce o aplicatie web contine html si css, ei incep cu asta
            - Veste buna! Aceste cunostinte se asimileaza usor si persoanele sunt incantate si prind incredere
            - Totusi, nu au siguranta ca asimileaza cele mai bune si mai noi metodologii
            - Acestia ajung sa creeze cu usurinta o particica mica a unei pagini insa sunt dificultati la crearea/abordarea unei aplicatii mai mari. De ce? Aceasta parte este una provocatoare si acest lucru il dovedeste existenta programatorilor care fac in mare masura html & css
            - Se poate face o aplicatie web *doar* cu aceste cunostinte? **NU!**

  - Cumpara un curs online
    - Foarte bine! Sunt multe cursuri online care sunt foarte bune si care ne-au ajutat si pe noi sa invatam. Care sunt acestea?  
        - *You don't know javascript* 
        - *Tutorials point javascript*
        - *Javascript patterns*
        - *Refactoring javascript*
        - *ES6 for humans*
        - *Javscript bible (curs online video)*
        - *Javscript fundamentals (curs online video)*
    - Asimilarea acestor carti/video-uri este anevoioasa pentru ca nu combina teoria cu realizarea unei aplicatii web si in acelasi timp cu algoritmica. Cateva recomandari pentru algoritmica sunt:
        - Javascript algorithms and data structures
        - Introduction to algorithms
    - Un procent destul de mic, cumpara un curs care arata cum se face o aplicatie web. La cumpararea unui asemenea curs, recomandam un curs care foloeste doar **React** sau **Vue**, fara *JQuery*!
    - Parcurgerea unui asemenea curs este recomandata **dupa** intelegerea conceptelor de baza si mai are dezavantajul neacoperirii decat unei abordari. La curs vom invata mai multe metode a crea o aplicatie web folosind **React**
  `,
};

export const programa0 = {
  nodes: [
    {
      name: 'Prefata',
      desc: `
        Acest curs se parcurge folosind o abordare moderna de invatare unde se combina teoria, practica, discutiile, feedbackul, experienta grupului.
        Pana acum am avut doar feedback pozitiv si incercam sa facem lucrurile din ce in ce mai bine
      `,
      nodes: []
    },
    {
      id: 1,
      name: 'Sedinta 1 - gratuita',
      desc: `
      # Continut
      - Discutie libera. 2h
      - Variabile
      - Operatori
      - Functii
     `,
      pret: 200,
      nodes: [
        {
          name: 'Consola',
          desc: 'Se va prezenta modul de lucru in consola browserului',
          pret: 200,
        },
        {
          id: 2,
          name: 'Variabile',
          desc:
            'Invatam despre semnificatia acestora si comparam abordarile de codare mai vechi cu cele noi',
          pret: 200,
          nodes: [
            {
              name: 'let',
              desc: '',
            },
            {
              name: 'const',
              desc: 'Se va prezenta modul de lucru in consola browserului',
            },
          ],
        },
        {
          id: 3,
          name: 'Operatori',
          desc: 'Vom face exercitii in consola, folosind acesti operatori',
          pret: 200,
          nodes: [
            {
              name: 'Operatori aritmetici',
              desc: 'saptamana 1',
            },
            {
              name: 'Operatori de asignare',
              desc: 'saptamana 1',
            },
            {
              name: 'Operatori de asignare',
              desc: 'saptamana 1',
            },
            {
              name: 'Operatori logici',
              desc: 'saptamana 1',
            },
            {
              name: 'Operatori de tip',
              desc: 'typeof && instanceof. Acestea vor fi discutate mai tarziu',
            },
            {
              name: 'Operatori pe biti',
              desc: 'saptamana 1',
            },
          ],
        },
      ],
    },
  ],
};
export const programa1 = {
  nodes: [
    {
      name: 'Sedinta 2 ',
      desc: `Pe langa discutarea functiilor, o sa incepem si tipurile de date.
      `,
      nodes: [
        {
          name: 'Functii',
          desc: '',
          nodes: [
            {
              name: 'functii',
              desc: '',
            },
            {
              name: 'functii anonime',
              desc: '',
            },
            {
              name: 'functii lambda',
              desc: '',
            },
          ],
        },
        {
          name: 'Tipuri de date',
          desc: '',
          nodes: [
            {
              name: 'String',
              desc: '',
            },
            {
              name: 'Sir',
              desc: '',
            },
            {
              name: 'Date',
              desc: '',
            },
            {
              name: 'Expresie regulara',
              desc: '',
            },
            {
              name: 'Number',
              link: 'https://www.w3schools.com/jsref/jsref_obj_number.asp',
            }
          ],
        },
        {
          name: 'Algoritmica',
          desc: '',
          nodes: [],
        },
      ],
    },
    {
      name: 'Sedinta 3 ',
      desc: `Pe langa discutarea functiilor, o sa incepem si tipurile de date.
      `,
      nodes: [
        {
          name: 'Functii',
          desc: '',
          nodes: [
            {
              name: 'functii',
              desc: '',
            },
            {
              name: 'functii anonime',
              desc: '',
            },
            {
              name: 'functii lambda',
              desc: '',
            },
          ],
        },
        {
          name: 'Tipuri de date',
          desc: '',
          nodes: [
            {
              name: 'String',
              desc: '',
            },
            {
              name: 'Sir',
              desc: '',
            },
            {
              name: 'Date',
              desc: '',
            },
            {
              name: 'Expresie regulara',
              desc: '',
            },
          ],
        },
        {
          name: 'Algoritmica',
          desc: '',
          nodes: [],
        },
      ],
    },
    {
      name: 'Sedinta 4 ',
      desc: `Pe langa discutarea functiilor, o sa incepem si tipurile de date.
      `,
      nodes: [
        {
          name: 'Instructiuni',
          desc: '',
          nodes: [
            {
              name: 'If',
              desc: '',
            },
            {
              name: 'Operatorul ternar',
              desc: '',
            },
            {
              name: 'For',
              desc: '',
            },
            {
              name: 'While',
              desc: '',
            },
            {
              name: 'Do-While',
              desc: '',
            },
            {
              name: 'Switch',
              desc: '',
            },
          ],
        },
        {
          name: 'Anexa',
          desc: '',
          nodes: [
            {
              name: 'Break',
              desc: '',
            },
            {
              name: 'Continue',
              desc: '',
            },
            {
              name: 'Debugger',
              desc: '',
            },
            {
              name: 'Error',
              desc: '',
            },
          ],
        },
        {
          name: 'Algoritmica',
          desc: '',
          nodes: [
            {
              name:
                'combinam exercitiile adaugand si filter, map, reduce, forEach ',
            },
          ],
        },
      ],
    },
    {
      name: 'Sedinta 5 + 6',
      desc: `Pe langa discutarea functiilor, o sa incepem si tipurile de date.
      `,
      nodes: [
        {
          name: 'Obiecte',
          desc: '',
          nodes: [
            {
              name: 'Crearea obiectelor',
              desc: '',
            },
            {
              name: 'instanceof',
              desc: '',
            },
            {
              name: 'operatorul new',
              desc: '',
            },
            {
              name: 'bind',
              desc: '',
            },
            {
              name: 'call',
              desc: '',
            },
            {
              name: 'apply',
              desc: '',
            },
            {
              name: 'this',
              desc: '',
            },
          ],
        },
        {
          name: 'Anexa',
          desc: '',
          nodes: [
            {
              name: 'Comunicarea intre obiecte',
              desc: '',
            },
            {
              name: 'Design patterns ',
              desc:
                'Incepem sa povestim despre sabloanele existente de comunicare intre obiecte',
            },
            {
              name: 'Module pattern',
              desc: '',
            },
            {
              name: 'TDD',
              desc:
                'Test Driven Development este o abordare prin care developerul se asigura de calitatea codului inainte de scrierea lui ',
            },
          ],
        },
        {
          name: 'Algoritmica',
          desc: '',
          nodes: [],
        },
      ],
    },
    {
      name: 'Sedinta 7 + 8',
      desc: `Pe langa discutarea functiilor, o sa incepem si tipurile de date.
      `,
      nodes: [
        {
          name: 'ES6',
          link: 'http://es6-features.org/#NumberFormatting',
          desc: `ECMAScript 6 se refera la noile inbunatatiri aduse javascriptului.
                 Desi am mentional si pana in acest moment am dat exemple cum se scrie codul raportat la javascript ES5 vs ES6, se merita sa discutam cateva minute despre aceste concepte `,
          nodes: [
            {
              name: 'Constante',
              desc: '',
            },
            {
              name: 'Functii lambda',
              desc: '',
            },
            {
              name: 'Extinderea parametrilor',
              desc: '',
            },
            {
              name: 'Template literals',
              desc: '',
            },
            {
              name: 'Destructuring',
              desc: '',
            },
            {
              name: 'Module',
              desc: '',
            },
            {
              name: 'Clase  ',
              desc: '',
            },
            {
              name: 'Iteratori',
              desc: '',
            },
            {
              name: 'Generatori',
              desc: '',
            },
            {
              name: 'Map and Set',
              desc: '',
            },
            {
              name: 'Promise',
              desc: '',
            },
            {
              name: 'Meta programing',
              desc: '',
              nodes: [
                {
                  name: 'Proxy',
                },
                {
                  name: 'Reflection',
                },
              ],
            },
            {
              name: 'Internationalization & Localization',
              desc: '',
            },
          ],
        },

        {
          name: 'Algoritmica',
          desc: '',
          nodes: [
            {
              name:
                'Se vor face in jur de 10 exercitii care se regasesc in lumea reala unde se folosesc obiecte',
              desc: `
                Un exemplu ar fii iplementarea unui sistem de loterie si multe altele
              `,
            },
          ],
        },
      ],
    },
    {
      name: 'Status',
      desc: `
        In acest moment am acumulat cunostintele fundamentale urmand sa alocam la fiecare sediinta cate o ora pentru a ne asigura de stapanirea acestor concepte si algoritmi
      `,
      nodes: []
    },
    
  ],
};

export const programa2 = {
  nodes: [
    
    {
      name: 'Sedinta 9 ',
      desc: `Vom parcurge elementele html si vom construi mai multe posibilitati de a aranja o pagina web folosind <b>bootstrap</b>.
      `,
      nodes: [
        {
          name: 'Html',
          desc:
            'Vom parcurge elementele html si vom urma pasii de invatare a bootstrap',
          nodes: []
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [
            {
              name: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Sedinta 10 ',
      desc: `Vom parcurge elementele html si vom construi mai multe posibilitati de a aranja o pagina web folosind <b>flexbox</b>.
      `,
      nodes: [
        {
          name: 'Html',
          desc:
            'Vom parcurge elementele html si vom urma pasii de invatare a flexbox',
          nodes: []
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [
            {
              name: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Status',
      desc: `
        In acest moment cursantii au abilitati de aranjare a elementelor in pagina. 

        Acest curs NU este un curs de design si pentru asta, cine doreste sa devina <b>web designer</b>, recomandam inscrirea la un alt curs.

        In urma acestor cursuri, participantii sunt capabili sa creeze pagini web care au o complexitate mica/medie, sa se descurce singuri la crearea unui task care presupune aranjarea elementelor in pagina sau sa faca propriul lor web site
      `,
      nodes: []
    },
    {
      name: 'Sedinta 11 ',
      desc: `Vom incepe crearea aplicatiei de react.
      `,
      nodes: [
        {
          name: 'Componenta Counter',
          desc:
            'Prima sedinta consta in crearea primei componente care reprezinta un counter',
          nodes: [{
            name: 'constructor',
            desc: 'discutam semnificatia unui component constructor'
          },
          {
            name: 'state',
            desc: 'discutam ce inseamna functia setState'
          },
          {
            name: 'dom events',
            desc: 'asocierea unui eveniment unui dom element'
          }, {
            name: 'render',
            desc: 'se discuta semnificatia functiei render'
          }]
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Design Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Creational Patterns',
              desc: 'Sabloane folosite la crearea obiectelor',
              nodes: [{
                name: 'Abstract Factory', desc: ''
              },
              {
                name: 'Factory Method', desc: ''
              }]
            },

          ],
        },
      ],
    },
    {
      name: 'Sedinta 12 ',
      desc: `Continuam aplicatia React prin adaugarea componentelor prezentationale.
      `,
      nodes: [
        {
          name: 'Adaugare componenta de prezentare',
          desc:
            'Imbunatatim aplicatia prin adaugarea unor noi componente',
          nodes: [{
            name: 'state',
            desc: 'discutam ce inseamna state'
          },
          {
            name: 'props',
            desc: 'discutam ce inseamna props'
          },
          {
            name: 'componenta de prezentare',
            desc: 'discutam ce inseamna o componenta folosita doar la prezentarea datelor'
          },
          {
            name: 'ciclu de viata a unei componente',
            desc: 'discutam care sunt metodele care se executa la afisarea unei componente',
            nodes: [
              {
                name: 'in momentul crearii',
                desc: 'evenimente care se apelaza la creare',
                nodes: [
                  {
                    name: 'constructor',
                    desc: 'constructorul componentei'
                  },
                  {
                    name: 'getDerivedStateFromProps',
                    desc: 'componenta primeste proprietati'
                  },
                  {
                    name: 'render',
                    desc: 'componenta se randeaza'
                  },
                  {
                    name: 'getSnapshotBeforeUpdate',
                    desc: 'componenta pune la dispozitie proprietatile folosite la randare'
                  },
                  {
                    name: 'componentDidUpdate',
                    desc: 'componenta s-a desenat'
                  }
                ]
              }
            ]
          }]
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Design Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Creational Patterns',
              desc: 'Sabloane folosite la crearea obiectelor',
              nodes: [{
                name: 'Lazy initialization', desc: ''
              },
              {
                name: 'Singleton', desc: ''
              },
              {
                name: 'Builder', desc: ''
              }]
            },

          ],
        },
      ],
    },
    {
      name: 'Sedinta 13 ',
      desc: `Continuam aplicatia React prin adaugarea componentelor prezentationale.
      `,
      nodes: [
        {
          name: 'Counter imbunatatit',
          desc:
            'Imbunatatim componenta Counter prin adaugarea unor noi componente',
          nodes: [{
            name: 'button component',
            desc: 'discutam crearea si refolosirea unei componente in componenta de counter'
          },
          {
            name: 'transmiterea proprietatilor',
            desc: 'transmiterea proprietatilor intre componente'
          },
          {
            name: 'randare',
            desc: 'vedem diferite metode de a desena o componenta in functie de anumite conditii'
          }]
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Design Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Structural Patterns',
              desc: 'Sabloane folosite la crearea obiectelor',
              nodes: [{
                name: 'Adapter', desc: ''
              },
              {
                name: 'Bridge', desc: ''
              },
              {
                name: 'Decorator', desc: ''
              }]
            },

          ],
        },
      ],
    },
    {
      name: 'Sedinta 14 ',
      desc: `Continuam aplicatia React prin adaugarea componentelor prezentationale.
      `,
      nodes: [
        {
          name: 'Comunicarea intre componente',
          desc:
            '',
          nodes: [{
            name: 'randare lista',
            desc: 'randarea unei liste de elemente',
            nodes: [{
              name: 'adaugare in lista',
            },
            {
              name: 'stergerea unui element din lista',
            },
            {
              name: 'stergerea mai multor elemente din lista',
            },
            {
              name: 'high order components',
            }]
          },
          {
            name: 'props',
            desc: 'transmiterea proprietatilor intre componente'
          },
          {
            name: 'ciclu de viata a unei componente',
            desc: 'discutam care sunt metodele care se executa la afisarea unei componente in momentul distrugerii ei',
            nodes: [
              {
                name: 'componentWillUnmount',
                desc: ''
              }
            ]
          }]
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Structural Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Composite', desc: ''
            },
            {
              name: 'Facade', desc: ''
            }
          ],
        },
      ],
    },
    {
      name: 'Sedinta 15 ',
      desc: `Continuam aplicatia React prin adaugarea componentelor prezentationale.
      `,
      nodes: [
        {
          name: 'Counter folosind hooks',
          desc:
            'Introducem conceptul de hooks',
          nodes: [{
            name: 'useState',
            desc: 'discutam ce inseamna useState'
          },
          {
            name: 'useEffect',
            desc: 'discutam ce inseamna useEffect'
          },
          {
            name: 'ciclu de viata a unei functional component',
            desc: 'discutam care sunt metodele care se executa la afisarea unei componente'
          }]
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Structural Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Flyweight', desc: ''
            },
            {
              name: 'Proxy', desc: ''
            }
          ],
        },
      ],
    },
    {
      name: 'Sedinta 16 ',
      desc: `Continuam aplicatia React prin adaugarea componentelor prezentationale.
      `,
      nodes: [
        {
          name: 'React - redux',
          desc:
            'adaugam o noua componenta care foloseste redux',
          nodes: [{
            name: 'store',
            desc: 'discutam ce inseamna store'
          },
          {
            name: 'reducer',
            desc: 'discutam ce inseamna reducer'
          },
          {
            name: 'container',
            desc: 'discutam ce inseamna container'
          }]
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Behaviour Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Chain of responsability', desc: ''
            },
            {
              name: 'Command', desc: ''
            }
          ],
        },
      ],
    },
    {
      name: 'Sedinta 17 ',
      desc: `Incepem crearea serverului.
      `,
      nodes: [
        {
          name: 'React - redux',
          desc:
            'Se prezinta container si actions',
          nodes: [{
            name: 'container',
            desc: 'discutam ce inseamna container'
          },
          {
            name: 'actions',
            desc: 'discutam ce inseamna actions in contextul redux'
          },
          ]
        },
        {
          name: 'Server',
          desc: 'se prezinta crearea unui simplu server',
          nodes: [
            {
              name: 'POSTMAN & Advanced Rest Client'
            },
            {
              name: 'POST',
            },
            {
              name: 'GET',
            },
            {
              name: 'PUT',
            },
            {
              name: 'PATCH',
            },
            {
              name: 'DELETE'
            }
          ],
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Behaviour Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Mediator', desc: ''
            },
            {
              name: 'Observer', desc: ''
            }
          ],
        },
      ],
    },
    {
      name: 'Sedinta 18 ',
      desc: `Incepem crearea serverului.
      `,
      nodes: [
        {
          name: 'Server',
          desc: 'Cream diferite rute pentru o entitate anume',
          nodes: [
            {
              name: 'routing',
            },
            {
              name: 'middleware',
              desc: 'explicam ce inseamna acest middleware si care e avantajul folosirii lui'
            },
            {
              name: 'securitate',
              desc: 'explicam ce trebuie sa folosim pentru securitatea rutelor',
              nodes: [
                {
                  name: 'CORS',
                },
                {
                  name: 'JWT'
                }
              ]
            },

          ],
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Behaviour Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'State', desc: ''
            },
            {
              name: 'Strategy', desc: ''
            }
          ],
        },
      ],
    },
    {
      name: 'Sedinta 19 ',
      desc: `Incepem crearea serverului.
      `,
      nodes: [
        {
          name: 'Server',
          desc: 'folosim baza de date la server',
          nodes: [
            {
              name: 'mongodb',
              desc: 'mongo este o baza de date care pastreaza datele intr-un format JSON',
              nodes: [{
                name: 'insert'
              },
              {
                name: 'update'
              },
              {
                name: 'delete'
              },
              {
                name: 'insert many'
              },
              {
                name: 'update many'
              },
              {
                name: 'inserare intr-o sub colectie'
              },
              {
                name: 'stergere dintr-o sub colectie'
              },
              ]
            },

          ],
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'Behaviour Patterns',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'Template Method', desc: ''
            },
            {
              name: 'Visitor', desc: ''
            }
          ],
        },
      ],
    },
    {
      name: 'Sedinta 20 ',
      desc: `Integram serverul aplicatiei react.
      `,
      nodes: [
        {
          name: 'React - server',
          desc:
            'Integram serverul la aplicatia REACT',
          nodes: [{
            name: 'integrare server',
            desc: ''
          },
          {
            name: 'actions',
            desc: 'discutam ce inseamna actions in contextul redux'
          },
          ]
        },
        {
          name: 'Server',
          desc: 'testarea metodelor',
        },
        {
          name: 'Algoritmica',
          desc: 'discutam/rezolvam concepte din javascript/OOP si algoritmica',
          nodes: [

          ],
        },
        {
          name: 'SOLID Principles',
          desc: 'sunt sabloane de implementare si se folosesc pentru rezolvarea rapida a taskurilor sau structurarea arhitecturala a unei aplicatii',
          nodes: [
            {
              name: 'SRP', desc: ''
            },
            {
              name: 'Open Closed', desc: ''
            },
            {
              name: 'Liskov Substitution Principle', desc: ''
            },
            {
              name: 'Interface Segregation Principle', desc: ''
            },
            {
              name: 'Dependency Injection Principle', desc: ''
            }
          ],
        },
      ],
    },
  ],
};