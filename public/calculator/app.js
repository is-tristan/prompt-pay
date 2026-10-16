function selectBand(turnover,atv){return {a:atv<15?0:atv<25?1:atv<50?2:atv<100?3:4,t:turnover<30000?0:turnover<50000?1:turnover<100000?2:turnover<200000?3:turnover<300000?4:5};}
function getRates(turnover,atv){const b=selectBand(turnover,atv);return RATE_CARD[b.a][b.t];}
const pct=n=>(n*100).toFixed(3).replace(/\.?0+$/,'')+'%';
const gbp=n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(n);
const pence=n=>Number((n*100).toFixed(3))+'p';
if(typeof document!=='undefined'){
const form=document.getElementById('quoteform'),offer=document.getElementById('offer');
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const turnover=Number(document.getElementById('turnover').value),atv=Number(document.getElementById('atv').value),mcc=document.getElementById('mcc').value;if(!Number.isFinite(turnover)||!Number.isFinite(atv)||turnover<0||turnover>50000000||atv<=0||!/^\d{4}$/.test(mcc))return;
const r=getRates(turnover,atv);document.getElementById('ratebody').innerHTML=r.map((row,i)=>'<tr><th scope="row">'+(i?'Online/phone<sup>7</sup>':'In person<sup>6</sup>')+'</th>'+row.map(n=>'<td>'+pct(n)+'</td>').join('')+'</tr>').join('');
document.getElementById('inputsummary').textContent='Annual card turnover: '+gbp(turnover)+' · Average transaction: '+gbp(atv)+' · MCC: '+mcc;
document.getElementById('examples').innerHTML='<div><span>If your customer uses a Mastercard personal debit card in person to purchase a £10 item, you would pay:</span><strong>'+pence(10*r[0][0])+' + 3.25p = '+pence(10*r[0][0]+.0325)+'</strong></div><div><span>If your customer uses a Visa personal credit card online or by phone to purchase a £10 item, you would pay:</span><strong>'+pence(10*r[1][4])+' + 3.25p = '+pence(10*r[1][4]+.0325)+'</strong></div><p class="helper">Examples show the percentage charge plus authorisation. Any applicable gateway fee (£0.10 per transaction) is additional. Figures are unrounded illustrations; billing rounding may differ.</p>';
offer.hidden=false;offer.focus({preventScroll:true});offer.scrollIntoView({behavior:'smooth'});});
document.getElementById('edit').addEventListener('click',()=>{offer.hidden=true;form.scrollIntoView({behavior:'smooth'});document.getElementById('turnover').focus({preventScroll:true});});
form.addEventListener('input',()=>{offer.hidden=true;});document.getElementById('print').addEventListener('click',()=>window.print());
}
if(typeof module!=='undefined')module.exports={selectBand,getRates,pct,pence};
