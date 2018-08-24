var app = new Vue({
  el: '#app',
  data: {
    site: "Stuff"
  },
  methods: {
    redirect: function(site) {
      this.site = site
    },
    open: function(url) {
      window.open(url)
    }
  }
})
