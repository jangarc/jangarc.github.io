
function counterControll(count, event){

  let { onCountChange } = event || {};

  function increase(){

    count.value++;

    if(typeof onCountChange==="function")
      onCountChange({type: "incerase", value: count.value});

  }

  function decreasing(){
    if(count.value > 0)
    {
      count.value--;

      if(typeof onCountChange==="function")
        onCountChange({type: "decreasing", value: count.value});

    }
  }

  return { increase, decreasing }

}

function LogControll(logItems){

  function addLog(item){
    logItems.value.push(item);
  }

  function generateLog(info){
    return {
      date: new Date(),
      info
    };
  }

  return { addLog, generateLog }

}