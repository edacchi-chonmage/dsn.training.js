const HEIGHT = '184px';
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fugiat iste itaque molestias reiciendis sed temporibus tenetur! Aliquid doloribus eum excepturi expedita fuga harum maxime natus, non, odio unde vitae?';

const app = new Vue({
  el: '#app',
  data: {
    accordions: [{
      title: 'ONE',
      text: LOREM,
      isOpened: false,
      height: 0
    }, {
      title: 'TWO',
      text: LOREM,
      isOpened: false,
      height: 0
    }, {
      title: 'THREE',
      text: LOREM,
      isOpened: false,
      height: 0
    }]
  },
  methods: {
    toggle: function(e, index) {
      const accordion = this.accordions[index];
      accordion.isOpened = !accordion.isOpened;
      accordion.height = accordion.isOpened ? HEIGHT : 0;
    }
  }
});