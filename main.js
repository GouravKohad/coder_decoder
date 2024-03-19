codeBtn.addEventListener('click',()=> {
   title.innerHTML = 'CODER'
   submit.innerHTML = 'CODE'
   resultValue.placeholder='Coded Value'
})

decodeBtn.addEventListener('click',()=> {
   title.innerHTML = 'DECODER'
   submit.innerHTML = 'DECODE'
   resultValue.placeholder='Decoded Value'
})
submit.addEventListener('click',()=> {
   if(value.value===''){
      resultValue.innerHTML = 'Please enter your value in textbox...'
   }
   else{
   fetch('blank.json').then((r)=> {
      return r.json()
   }).then((result)=> {
      let aValue = value.value.toLowerCase()
      let newValue = ''
      for(i of aValue){
         if(result[i]!==undefined){
            newValue+=result[i]
         }
         else{
            newValue+=i
         }
      }
      resultValue.innerHTML = newValue
      value.value=''
   })
   }
})
