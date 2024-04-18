import { series } from "./data.js";
var seriesTabla = document.getElementById("series-table");
showData(series);
function showData(series) {
    var seriesTableBody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var serieRow = document.createElement("tr");
        serieRow.addEventListener("click", listenerShowMoreData);
        serieRow.innerHTML = "<td class=\"table-active\"><b>".concat(serie.id, "</b></td>\n                              <td class=\"table-active serie-name\" style=\"color:cornflowerblue\">").concat(serie.name, "</td>\n                              <td class=\"table-active\">").concat(serie.channel, "</td>\n                              <td class=\"table-active\">").concat(serie.seasons, "</td>");
        seriesTableBody.appendChild(serieRow);
    }
    seriesTabla.appendChild(seriesTableBody);
}
var average = document.getElementById("average");
showAverage(series);
function showAverage(series) {
    var totalSeasons = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalSeasons += serie.seasons;
    }
    var averageSeasons = totalSeasons / series.length;
    average.innerHTML = "Season average: ".concat(averageSeasons);
}
var moreData = document.getElementById("info");
function listenerShowMoreData(ev) {
    var _a;
    var target = ev.target;
    var serieIdElement = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector("td:first-child b");
    var serieIdText = serieIdElement ? serieIdElement.textContent || "" : "";
    var serieId = parseInt(serieIdText, 10);
    console.log("ID de la serie:", serieId);
    for (var _i = 0, series_3 = series; _i < series_3.length; _i++) {
        var serie = series_3[_i];
        if (serie.id == serieId) {
            var image = serie.imageUrl;
            console.log("Imagen de la serie:", image);
            moreData.innerHTML = "<div class=\"card\">\n                                    <img src=\"".concat(image, "\" class=\"card-img-top\" alt=\"Series image\" id=\"image\" width=\"70%\">\n                                    <div class=\"card-body\">\n                                        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                                        <p class=\"card-text\">").concat(serie.description, "</p>\n                                        <a class=\"btn btn-primary\" href=\"").concat(serie.website, "\">Mas Informaci\u00F3n</a>\n                                    </div>\n                                </div>");
        }
    }
}
