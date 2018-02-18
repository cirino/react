function validaCPF(cpf)
{if(cpf.length<11)return false;var nonNumbers=/\D/;if(nonNumbers.test(cpf))return false;if(cpf=="00000000000"||cpf=="11111111111"||cpf=="22222222222"||cpf=="33333333333"||cpf=="44444444444"||cpf=="55555555555"||cpf=="66666666666"||cpf=="77777777777"||cpf=="88888888888"||cpf=="99999999999")
return false;var a=[];var b=new Number;var c=11;for(i=0;i<11;i++){a[i]=cpf.charAt(i);if(i<9)b+=(a[i]*--c);}
if((x=b%11)<2){a[9]=0;}else{a[9]=11-x;}
b=0;c=11;for(y=0;y<10;y++)
b+=(a[y]*c--);if((x=b%11)<2)
{a[10]=0;}
else
{a[10]=11-x;}
if((cpf.charAt(9)!=a[9])||(cpf.charAt(10)!=a[10]))
return false;return true}
function vCPF(i){var cpf=i.value;cpf=cpf.replace(/[^\d]+/g,'');i.setCustomValidity(validaCPF(parseInt(i.value))?'':'CPF inválido!');if(!validaCPF(parseInt(i.value)))
{alert('CPF inválido!');i.focus();}}
function maskIt(w,e,m,r,a)
{if(!e)var e=window.event;if(e.keyCode)code=e.keyCode;else if(e.which)code=e.which;var txt=(!r)?w.value.replace(/[^\d]+/gi,''):w.value.replace(/[^\d]+/gi,'').reverse();var mask=(!r)?m:m.reverse();var pre=(a)?a.pre:"";var pos=(a)?a.pos:"";var ret="";if(code==9||code==8||txt.length==mask.replace(/[^#]+/g,'').length)return false;for(var x=0,y=0,z=mask.length;x<z&&y<txt.length;){if(mask.charAt(x)!='#'){ret+=mask.charAt(x);x++;}else{ret+=txt.charAt(y);y++;x++;}}
ret=(!r)?ret:ret.reverse();w.value=pre+ret+pos;}
function getEndereco(cep,endereco,bairro,cidade,estado,numero,complemento,check){if($.trim(cep)!=""){var str=cep;var n=str.replace("-","");jQuery("#"+check).html('<i class="fa fa-refresh fa-spin fa-fw"></i>');$.getScript("https://www.cpfcnpj.com.br/cep.php?cep="+str,function(){if(resultadoCEP["resultado"]>=1)
{if(resultadoCEP["tipo_logradouro"]!="")
jQuery("#"+endereco).val(unescape(resultadoCEP["tipo_logradouro"])+": "+unescape(resultadoCEP["logradouro"]));else if(resultadoCEP["logradouro"]!="")
jQuery("#"+endereco).val(unescape(resultadoCEP["logradouro"]));jQuery("#"+bairro).val(unescape(resultadoCEP["bairro"]));new dgCidadesEstados({estado:document.querySelector('.'+estado),cidade:document.querySelector('.'+cidade),estadoVal:unescape(resultadoCEP["uf"]),cidadeVal:unescape(resultadoCEP["cidade"])});jQuery("#"+numero).val('');jQuery("#"+complemento).val('');jQuery("#"+check).html('');if(resultadoCEP["logradouro"]=="")
jQuery("#"+endereco).focus();else
jQuery("#"+numero).focus();}
else
{jQuery("#"+endereco).val('');jQuery("#"+bairro).val('');jQuery("#"+numero).val('');jQuery("#"+complemento).val('');new dgCidadesEstados({estado:document.querySelector('.'+estado),cidade:document.querySelector('.'+cidade),estadoVal:unescape(0),cidadeVal:unescape(0)});jQuery("#"+check).html('');alert('CEP inválido!');jQuery("#cep").focus();jQuery("#"+check).html("<font color='#990000'>X</font>");}});}}