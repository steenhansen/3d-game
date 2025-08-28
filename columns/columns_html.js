

document.getElementById('column-html').innerHTML = `
<div id="column-3a"></div>
<div id="column-3b"></div>
<div id="column-3c"></div>
<div id="column-2a"></div>
<div id="column-2b"></div>
<div id="column-1a"></div>
`;



function setColumns() {
  columnSet(column_3a, 'column-3a');
  columnSet(column_3b, 'column-3b');
  columnSet(column_3c, 'column-3c');

  columnSet(column_2a, 'column-2a');
  columnSet(column_2b, 'column-2b');

  columnSet(column_1a, 'column-1a');

}