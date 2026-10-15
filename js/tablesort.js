document$.subscribe(function() {
    var tables = document.querySelectorAll("article table.sortable")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
  })
