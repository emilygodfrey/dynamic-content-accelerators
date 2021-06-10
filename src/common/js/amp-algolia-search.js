'use strict';

(function (exports) {
  function findSearches() {
    // Check if there are any attributes on the page that require searches
    var searchElements = document.querySelectorAll('[data-amp-dc-algolia-search]');
    if (searchElements && searchElements.length > 0) {
      // We have an item we should now trigger the search SDK.
      var searchClient = algoliasearch('{ALGOLIA_ID}', '{ALGOLIA_SECRET}');
      var vse = window.AmpCa.Utils.getUrlParameter('vse');
      var indexName = vse ? 'bravissimo-eval.blog-posts-staging':'bravissimo-eval.blog-posts'

      searchElements.forEach(function (item) {
        var max = item.getAttribute('data-amp-dc-numItems');
        var query = item.getAttribute('data-amp-dc-query');
        item.innerHTML="";

        var index = searchClient.initIndex(indexName);
        var searchSettings = {
          hitsPerPage: max,
        };

        index.search(query, searchSettings).then(({ hits }) => {
          console.log('QUERY RESPONSE:');
          console.log(hits);
          console.log(item);

          hits.forEach(function (hit){
            var newNode = document.createElement('div');
            //newNode.innerHTML = '<div class="amp-dc-blog-item"><a href="https://silly-leakey-66f8b9.netlify.app/blog/' + hit._meta.deliveryKey + '"><img class="amp-dc-blog-image" src="//' + hit.image.image.defaultHost + '/i/' + hit.image.image.endpoint + '/' + hit.image.image.name + '?&sm=c&h=140&w=414&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}" alt="' + hit.image.altText + '"> <h1 class="amp-dc-blog-title">' + hit.title + '</h1><div class="amp-dc-blog-description">' + hit.description + '</div></a></div>'
            newNode.innerHTML = '<div class="amp-dc-blog-item"><a href="javascript:void(0);" onclick="AmpCa.Utils.evaluateAmplienceLink(\''+hit._meta.deliveryKey+'\', \'page\');"><img class="amp-dc-blog-image" src="//' + hit.snippet.image.imageholder.image.image.defaultHost + '/i/' + hit.snippet.image.imageholder.image.image.endpoint + '/' + hit.snippet.image.imageholder.image.image.name + '?&sm=c&h=140&w=414&scaleFit=poi&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}" > <h1 class="amp-dc-blog-title">' + hit.snippet.title + '</h1><div class="amp-dc-blog-description">' + hit.snippet.description + '</div></a></div>'

            item.appendChild(newNode)
          })
        });
      });
    }
  }

  exports.Utils = window.AmpCa.Utils || exports.Utils || {};
  exports.Utils.findSearches = findSearches;

  window.addEventListener('load', function () {
    findSearches();
  });
})
(
  window.AmpCa = window.AmpCa || {}
);
