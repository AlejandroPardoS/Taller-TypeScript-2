import { series } from "./data.js";
var seriesTabla = document.getElementById("series-table");
showData(series);
function showData(series) {
    var seriesTableBody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var serieRow = document.createElement("tr");
        serieRow.innerHTML = "<td class=\"table-active\"><b>".concat(serie.id, "</b></td>\n                              <td class=\"table-active\" style=\"color:cornflowerblue\">").concat(serie.name, "</td>\n                              <td class=\"table-active\">").concat(serie.channel, "</td>\n                              <td class=\"table-active\">").concat(serie.seasons, "</td>");
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
