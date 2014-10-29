(function(){

  // Create your component here
  // http://x-tags.org/docs

  xtag.register('media-object', {
    lifecycle: {
      created: function() {
        var tpl  = document.querySelector('.media-object');
        var root = this.createShadowRoot();

        root.appendChild(document.importNode(tpl.content, true));

      },
      inserted: function() {


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


(function(){

  // Create your component here
  // http://x-tags.org/docs

  xtag.register('canvas-drawer', {
    lifecycle: {
      created: function() {
        var tpl  = document.querySelector('.off-canvas');
        var root = this.createShadowRoot();
        root.appendChild(document.importNode(tpl.content, true));

      },
      inserted: function() {


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
