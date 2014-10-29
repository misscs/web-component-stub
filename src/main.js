(function(){

  // Create your component here
  // http://x-tags.org/docs

  xtag.register('odd-noun', {
    lifecycle: {
      created: function() {
        console.log('Created');

        this.xtag.textEl = document.createElement('strong');

        this.xtag.spinnerContainer = document.createElement('div');
        this.xtag.spinner = document.createElement('div');

        this.xtag.spinnerContainer.className = 'spinner';

        this.xtag.spinnerContainer.appendChild(this.xtag.spinner);
        this.appendChild(this.xtag.spinnerContainer);
        this.appendChild(this.xtag.textEl);



      },
      inserted: function() {
        console.log('Inserted');

      },
      removed: function() {},
      attributeChanged: function() {}
    },
    events: {

    },
    accessors: {

    },
    methods: {

    }
  });

})();
