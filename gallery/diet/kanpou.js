function ttlValue() {
  chn = 16; // チェックボックスの総数
  ttl = 0;
  for(i=0; i<chn; i++) {
    if(document.nForm.elements[i].checked) {
      ttl += eval(document.nForm.elements[i].value);
    }
  }
  document.nForm.result.value = ttl;
}

function ttlValue2() {
  chn = 16; // チェックボックスの総数
  ttl = 0;
  for(i=0; i<chn; i++) {
    if(document.nForm2.elements[i].checked) {
      ttl += eval(document.nForm2.elements[i].value);
    }
  }
  document.nForm2.result2.value = ttl;
}

function ttlValue3() {
  chn = 16; // チェックボックスの総数
  ttl = 0;
  for(i=0; i<chn; i++) {
    if(document.nForm3.elements[i].checked) {
      ttl += eval(document.nForm3.elements[i].value);
    }
  }
  document.nForm3.result3.value = ttl;
}

function ttlValue4() {
  chn = 16; // チェックボックスの総数
  ttl = 0;
  for(i=0; i<chn; i++) {
    if(document.nForm4.elements[i].checked) {
      ttl += eval(document.nForm4.elements[i].value);
    }
  }
  document.nForm4.result4.value = ttl;
}


function ttlValue5() {
  chn = 16; // チェックボックスの総数
  ttl = 0;
  for(i=0; i<chn; i++) {
    if(document.nForm5.elements[i].checked) {
      ttl += eval(document.nForm5.elements[i].value);
    }
  }
  document.nForm5.result5.value = ttl;
}


function ttlValue6() {
  chn = 16; // チェックボックスの総数
  ttl = 0;
  for(i=0; i<chn; i++) {
    if(document.nForm6.elements[i].checked) {
      ttl += eval(document.nForm6.elements[i].value);
    }
  }
  document.nForm6.result6.value = ttl;
}