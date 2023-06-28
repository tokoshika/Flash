cards = [
  {
    id: 0,
    frontText: "銀行",
    backText: "ぎんこう",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 1,
    frontText: "鹿追町",
    backText: "しかおいちょう",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 2,
    frontText: "CHURCH",
    backText: "教会",
    colorClass: "blue",
    flipped: false,
  },
  {
    id: 3,
    frontText: "POLAR BEAR",
    backText: "北極熊",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 4,
    frontText: "ALARM CLOCK",
    backText: "目覚まし時計",
    colorClass: "yellow",
    flipped: false,
  },
  {
    id: 5,
    frontText: "THIEF",
    backText: "泥棒",
    colorClass: "blue",
    flipped: false,
  },
  {
    id: 6,
    frontText: "MUSIC",
    backText: "音楽",
    colorClass: "red",
    flipped: false,
  },
  {
    id: 7,
    frontText: "PAPER",
    backText: "紙",
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
