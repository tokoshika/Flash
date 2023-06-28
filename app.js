cards = [
  {
    id: 0,
    frontText: "安心",
    backText: "あんしん",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 1,
    frontText: "泳ぐ",
    backText: `およぐ`,
    colorClass: "red",
    flipped: false,
  },
  {
    id: 2,
    frontText: "駅",
    backText: "えき",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 3,
    frontText: "荷物",
    backText: "にもつ",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 4,
    frontText: "曲がる",
    backText: `まがる`,
    colorClass: "red",
    flipped: false,
  },
  {
    id: 5,
    frontText: "医者",
    backText: `いしゃ`,
    colorClass: "red",
    flipped: false,
  },
  {
    id: 6,
    frontText: "育てる",
    backText: "そだてる",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 7,
    frontText: "運動",
    backText: "うんどう",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 8,
    frontText: "二階",
    backText: "にかい",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 9,
    frontText: "地区",
    backText: "ちく",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 10,
    frontText: "野球",
    backText: "やきゅう",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 11,
    frontText: "虫歯",
    backText: "むしば",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 12,
    frontText: "大根",
    backText: "だいこん",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 13,
    frontText: "開始",
    backText: "かいし",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 14,
    frontText: "お酒",
    backText: "おさけ",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 15,
    frontText: "宿題",
    backText: "しゅくだい",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 16,
    frontText: "集合",
    backText: `しゅう\nごう`,
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 17,
    frontText: "乗車",
    backText: `じょう\nしゃ`,
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 18,
    frontText: "写真",
    backText: "しゃしん",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 19,
    frontText: "道具",
    backText: "どうぐ",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 20,
    frontText: "感想",
    backText: "かんそう",
    colorClass: "yellow",
    flipped: false,
  },
];

const flashCardApp = new Vue({
  el: "#flashCardApp",
  data: {
    cards: cards,
    showedCard: cards[0],
  },

  methods: {
    flipCard: function () {
      this.showedCard.flipped = !this.showedCard.flipped;
    },

    nextCard: function () {
      let showedId = this.showedCard.id + 1;
      if (showedId >= cards.length) {
        showedId = 0;
      }
      this.showedCard = cards[showedId];
    },

    previosCard: function () {
      let showedId = this.showedCard.id - 1;
      if (showedId < 0) {
        showedId = cards.length - 1;
      }
      this.showedCard = cards[showedId];
    },
  },
});

if (annyang) {
  // Let's define a command.
  const commands = {
    次: () => {
      flashCardApp.nextCard();
    },
    フリップ: () => {
      flashCardApp.flipCard();
    },
    前: () => {
      flashCardApp.previosCard();
    },
  };

  annyang.setLanguage("ja");
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
