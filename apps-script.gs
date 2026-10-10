// Pega este código en: tu Google Sheet → Extensiones → Apps Script
const HEAD=['fecha','id','prenda','talla','color','estilo','altura','pecho','cintura','cadera','comparadas','cambios_talla','p_uso','p_pasos','p_recom','p_talla','p_entendi','p_seguro','p_claridad','p_confianza','estrellas','nps','usaria','pagaria','comentario'];
function doPost(e){
  const d=JSON.parse(e.postData.contents);
  const sh=SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if(sh.getLastRow()==0) sh.appendRow(HEAD);
  sh.appendRow(HEAD.map(k=>k=='fecha'?new Date():(d[k]===undefined?'':d[k])));
  return ContentService.createTextOutput('ok');
}
