$(document).ready(function () {
  $("#nav_list a").on("click", function (e) {
    e.preventDefault();
    var jsonFile = "./json_files/" + e.currentTarget.title + ".json";
    $.getJSON(jsonFile, function (data) {
      $.each(data, function (key, speakers) {
        $.each(speakers, function (key, value) {
          var html = `
          <h1>${value.title}</h1>
          <img src="${value.image}" />
          <h2>${value.month}<br />${value.speaker}</h2>
          <p>${value.title}</p>
          `;

          $("main").html(html);
        });
      });
    });
  });
});
