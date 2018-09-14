new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0,
    reactCounter: 0
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert("Alert");
    },
    result: function() {
      console.log('method')
      return this.reactCounter > 5 ? "Greater than 5" : "Smaller than 5";
    }
  },
  computed: {
    output: function() {
      console.log('computed')
      return this.reactCounter > 5 ? "Greater than 5" : "Smaller than 5";
    }
  },
  watch: {
    reactCounter: function(value){
      var vm = this;
      setTimeout(() => {
        vm.reactCounter = 0;
      }, 2000);
    }
  }
});
