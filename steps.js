module.exports = steps = {
  "": {
    question: `Доброе утро, хочешь открытку? `,
    btns: [
      {msg: 'НЕТ', next: 'НЕТ'},
      {msg: 'Да, давай', next: 'Финал 2'}
    ]
  },
  "НЕТ": {
    question: ` А я все равно пришлю, у тебя нет шансов.
    Вообще, я тебя атакую, вперед, котики-енотики, несите открытки в бой!`,
    btns: [
      {msg: 'Отстреливаться мемами', next: 'Мемы'},
      {msg: 'Принять неизбежное', next: 'Финал 2'},
      {msg: 'Достать икону', next: 'Финал 3'}
    ]
  },

  "Мемы": {
    question: `О нет, мы все умрем!

     Ладно, мне не страшно. Что дальше?`,
    btns: [
      {msg: 'Принять неизбежное', next: 'Финал 2'},
      {msg: 'Достать икону', next: 'Финал 3'}
    ]
  },
  "Финал 2": {
    question: `На открытку`,
    photoUrl: './11.jpg',
    //'https://sun9-23.userapi.com/impg/9QoR9Aa5T5-P5-1IKdm_Bnofaq9AjD7lhJbyxg/bG2BuqexUxU.jpg?size=617x544&quality=96&sign=4c752b00fd0dbfa37bc2dcd659e51d99&type=album',

    /*picture*/
    btns: [
      {msg: 'Попробовать еще раз', next: ''},
    ]
  },
  "Финал 3": {
    question: `Ну ты и стремный тип!
               На открытку.`,
    btns: [
      {msg: 'Попробовать еще раз', next: ''},
    ]
  },

}