const createID = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

export const data = [
  {
    name: "Public Transport",
    icon: "train",
    data: [
      {
        name: "SBB",
        id: createID(),
        logo: require("../../../assets/market/sbb.png"),
        
        info:
          "Swiss Federal Railways is the national railway company of Switzerland. The company is headquartered in Bern. It used to be a government institution, but since 1999 it has been a special stock corporation whose shares are held by the Swiss Confederation and the Swiss cantons.",
        options: [
          {
            name: "Ticket one",
            id: createID(),
            price: "3"
          },
          {
            name: "Ticket two",
            id: createID(),
            price: "2"
          },
          {
            name: "Ticket three",
            id: createID(),
            price: "1"
          },
          {
            name: "Ticket four",
            id: createID(),
            price: "3"
          },
          {
            name: "Ticket five",
            id: createID(),
            price: "2"
          }
        ]
      },
      {
        name: "ZVV",
        id: createID(),
        logo: require("../../../assets/market/zvv.png"),
        info:
          "Ob Bahn, Tram, Bus, Schiff oder Luftseilbahn: Das ZVV-Ticket ist ein Ticket für alles. Innerhalb der gelösten Zonen und während der zeitlichen Gültigkeit des Tickets können Sie so oft fahren, wie Sie möchten.",
        options: [
          {
            name: "Ticket one",
            id: createID(),
            price: "3"
          },
          {
            name: "Ticket two",
            id: createID(),
            price: "2"
          },
          {
            name: "Ticket three",
            id: createID(),
            price: "1"
          }
        ]
      }
    ]
  },
  {
    name: "Health insurance",
    icon: "paper",
    data: [
      {
        name: "ÖKK",
        id: createID(),
        logo: require("../../../assets/market/okk.jpg"),
        info:
          "Die neue Plattform von ÖKK vermittelt Ihnen nützliche Dienstleistungen in den Bereichen Haushalt, E-Learning und Organisation. Erleichtern Sie sich das Leben – mit Simpla.",
        options: [
          {
            name: "Insurance for one day",
            id: createID(),
            price: "10"
          },
          {
            name: "Insurance for one week",
            id: createID(),
            price: "20"
          },
          {
            name: "Insurance for one month",
            id: createID(),
            price: "30"
          },
          {
            name: "Insurance for one year",
            id: createID(),
            price: "40"
          }
        ]
      },
      {
        name: "Sanitas",
        id: createID(),
        logo: require("../../../assets/market/sanitas.png"),
        info:
          "Sanitas offers comprehensive insurance solutions with exclusive services or low-cost alternatives that adapt flexibly to customer requirements.",
        options: [
          {
            name: "Insurance for one day",
            id: createID(),
            price: "10"
          },
          {
            name: "Insurance for one week",
            id: createID(),
            price: "20"
          },
          {
            name: "Insurance for one month",
            id: createID(),
            price: "30"
          },
          {
            name: "Insurance for one year",
            id: createID(),
            price: "40"
          }
        ]
      },
      {
        name: "Helvetia",
        id: createID(),
        logo: require("../../../assets/market/helvetia.png"),
        info:
          "ottoscrivi la Polizza Viaggi Helvetia OK Travel e vivi la tua vacanza con spensieratezza. Scopri tutti i vantaggi della nostra assicurazione. Calcola il tuo preventivo subito! Assistenza in Viaggio. Copertura Medica. Assistenza 24 ore su 24. Copertura Bagaglio. Infortuni Viaggio e Volo.",
        options: [
          {
            name: "Insurance for one day",
            id: createID(),
            price: "3"
          },
          {
            name: "Insurance for one week",
            id: createID(),
            price: "7"
          },
          {
            name: "Insurance for one month",
            id: createID(),
            price: "20"
          },
          {
            name: "Insurance for one year",
            id: createID(),
            price: "100"
          }
        ]
      },
      {
        name: "Visana",
        id: createID(),
        logo: require("../../../assets/market/visana.jpg"),
        info:
          "Mit myVisana behalten Sie den Überblick und sparen erst noch Zeit. Das Gute dabei: Die Papierflut aus Leistungsabrechnungen und Versicherungspolicen hat dank myVisana ein Ende. Übersichtlich geordnet, haben Sie Ihre Versicherungsdokumente jederzeit elektronisch im Griff. Zuhause oder unterwegs.",
        options: [
          {
            name: "Insurance for one day",
            id: createID(),
            price: "3"
          },
          {
            name: "Insurance for one week",
            id: createID(),
            price: "7"
          },
          {
            name: "Insurance for one month",
            id: createID(),
            price: "20"
          },
          {
            name: "Insurance for one year",
            id: createID(),
            price: "100"
          }
        ]
      }
    ]
  },
  {
    name: "Rent car",
    icon: "ios-car",
    data: [
      {
        name: "Mobility",
        id: createID(),
        logo: require("../../../assets/market/mobility.png"),
        info:
          "Your key to 3,090 vehicles at 1,480 locations throughout Switzerland. Find the right car for your needs. Simple and straightforward with Mobility.",
        options: [
          {
            name: "Audi",
            id: createID(),
            price: "5"
          },
          {
            name: "BMW",
            id: createID(),
            price: "5"
          },
          {
            name: "Mercedes",
            id: createID(),
            price: "5"
          },
          {
            name: "Toyota",
            id: createID(),
            price: "5"
          },
          {
            name: "Ford",
            id: createID(),
            price: "5"
          }
        ]
      },
      {
        name: "Sharoo",
        id: createID(),
        logo: require("../../../assets/market/sharoo.png"),
        info:
          "Bei sharoo findest du ein Auto für jede Gelegenheit. Du planst einen Ausflug, zügelst bald oder möchtest einfach mal eine Runde mit einem besonderen Auto drehen?",
        options: [
          {
            name: "Audi",
            id: createID(),
            price: "5"
          },
          {
            name: "BMW",
            id: createID(),
            price: "5"
          },
          {
            name: "Mercedes",
            id: createID(),
            price: "5"
          },
          {
            name: "Toyota",
            id: createID(),
            price: "5"
          },
          {
            name: "Ford",
            id: createID(),
            price: "5"
          }
        ]
      }
    ]
  },
  {
    name: "Rent bike",
    icon: "bicycle",
    data: [
      {
        name: "PubliBike",
        id: createID(),
        logo: require("../../../assets/market/publibike.jpg"),
        info: "On 1 January 2014, PubliBike was transformed into a public limited company and operates as an independent subsidiary of PostBus.",
        options: [
          {
            name: "Rent for one hour",
            id: createID(),
            price: "2"
          },
          {
            name: "Rent for three hours",
            id: createID(),
            price: "4"
          },
          {
            name: "Rent for one day",
            id: createID(),
            price: "10"
          }
        ]
      }
    ]
  },
  {
    name: "Bank Fees",
    icon: "ios-cash",
    data: [
      {
        name: "Expatica",
        id: createID(),
        logo: require("../../../assets/market/expatica.png"),
        info: "Swiss banks tend to allocate an individual account manager to each customer, so make a note of who yours is and try to get hold of both their email address and direct phone number to help you with any issues.",
        options: [
          {
            name: "Change 1 coin to 0.125 CHF",
            id: createID(),
            price: "1"
          },
          {
            name: "Change 10 coin to 1.25 CHF",
            id: createID(),
            price: "10"
          },
          {
            name: "Change 100 coin to 12.5 CHF",
            id: createID(),
            price: "100"
          },
          {
            name: "Change 1000 coin to 125 CHF",
            id: createID(),
            price: "1000"
          }
        ]
      }
    ]
  }
];
