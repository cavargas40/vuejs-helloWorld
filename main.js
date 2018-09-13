new Vue({
  el: "#app",
  data: {
    name: "Carlos",
    age: 26,
    title: "Hello World!",
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">Google</a>',
    image:
      "https://cdn4.buysellads.net/uu/1/8026/1534791827-Apps_AlwaysOnWebinars_NZL_260x200_BAN_NA_EN_NA_Standard_SBAN_WACM_T1_1.jpg"
  },
  methods: {
    sayHello() {
      return this.title;
    },
    random() {
      return Math.random();
    },
    getName() {
      return this.name;
    }
  }
});
