
document.querySelectorAll('input[type="checkbox"]').forEach((el,i)=>{
  const k='jp26_check_'+i;
  el.checked=localStorage.getItem(k)==='1';
  el.addEventListener('change',()=>localStorage.setItem(k,el.checked?'1':'0'));
});
