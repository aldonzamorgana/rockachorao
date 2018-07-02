/**
 * var CountriesDropdown - Methods for c-CountriesDropdown component
 * @module js/modules
 * @requires js/vendor/jquery
 * @requires js/vendor/select2
 * @requires js/vendor/jquery.nicescroll
 *
 */

var CountriesDropdown = function(){
  "use strict";
  var exports = {};
  var dom = {};
  var events = {};

  var catchdom = function() {
    dom.module = $(".CountriesDropdown");
    dom.countries_select = $(".CountriesDropdown__select");
  };

  // Initialize
  exports.init = function(file_path) {
    catchdom();
    events.createDropdown();
    eventListeners();
  };

  var eventListeners = function () {

    // On select item
    dom.countries_select.on("select2:select", function (event) {
      // var selected_value = event.params.data.id;
      // events.selectedCountry(selected_value);
      console.log(event)
    });
  };

  events.createNiceScroll = function() {

    $(".CountriesDropdown .select2-results__options").niceScroll({
      autohidemode: false,
      cursorcolor:"#404040",
      cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
      cursoropacitymax: 0.7, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
      cursorwidth:"9px"
    });

  };


  // Create custom dropdown suing select2 plugin
  events.createDropdown = function(){

    var selectionFormat = function(data, container) {
      var css_class = $(data.element).attr("data-imagecss");
      var selection = $(
        "<img src='img/blank.gif' class='CountriesDropdown__flag " + css_class + "'/><span class='text'>" + data.text + "</span>"
      );
      return selection;
    }

    var itemsFormat = function (state) {
      if (!state.id) { return state.text; }
      var css_class = $(state.element).attr("data-imagecss");
      var data_title = $(state.element).attr("data-title");
      var $item = $(
        "<a href='#' class='CountriesDropdown__item' title='" + data_title + "'><img src='img/blank.gif' class='CountriesDropdown__flag " + css_class + "'/><span class='text'>" + state.text + "</span></a>"
      );
      return $item;
    };

    dom.countries_select.select2({
      minimumResultsForSearch: Infinity,
      templateResult: itemsFormat,
      templateSelection: selectionFormat,
      dropdownParent: $(".CountriesDropdown") // Select list wrappper
    });

    dom.countries_select.on('select2:open', function (e) {
      events.createNiceScroll();
    });

  };

  // On country selected
  events.selectedCountry = function(country_id){

    // Do something with this value
    console.log("Country selected: ", country_id);
  };

  return exports;
};
