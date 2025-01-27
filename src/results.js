const params = getParams();
console.log(params);

document.querySelector("#result").innerHTML = `<table border='solid'>
  <thead>
    <tr>
      <th>Full Name</th><th>Sex</th><th>DOB</th><th>Email</th><th>County</th><th>Telephone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${params.fullname}</td><td>${params.sex}</td><td>${
  params.dob
}</td><td>${params.email}</td><td>${params.county}</td><td>${
  params.telephone
}</td>
    </tr>
  </tbody>
</table>`;
function getParams(b) {
  var c = b ? b.split("?")[1] : window.location.search.slice(1),
    d = {};
  if (c) {
    c = c.split("#")[0];
    for (var e = c.split("&"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        a = g[0],
        h = "undefined" == typeof g[1] || g[1];
      if (
        ((a = a.toLowerCase()),
        "string" == typeof h && (h = h.toLowerCase()),
        a.match(/\[(\d+)?\]$/))
      ) {
        var j = a.replace(/\[(\d+)?\]/, "");
        if ((d[j] || (d[j] = []), a.match(/\[\d+\]$/))) {
          var k = /\[(\d+)\]/.exec(a)[1];
          d[j][k] = h;
        } else d[j].push(h);
      } else
        d[a]
          ? d[a] && "string" == typeof d[a]
            ? ((d[a] = [d[a]]), d[a].push(h))
            : d[a].push(h)
          : (d[a] = h);
    }
  }
  return d;
}
