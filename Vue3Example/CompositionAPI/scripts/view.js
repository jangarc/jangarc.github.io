function CounterView(count, { increase, decreasing }, injectChild ){

  return () => h("div", null, [
    h("h1", null, [ "Count: ", count.value ]),
    h("p", null, [
      h("button", { onClick: increase }, "+"),
      h("button", { onClick: decreasing }, "-")
    ]),
    injectChild != null ? injectChild() : null
  ])

}

function LogView(logItems, title){

  return () => h("div", null, [
    title!=null ? h("h1", title) : null,
    Array.isArray(logItems.value) && logItems.value.length > 0 ?
      logItems.value.map(log => h("div", null, log.info))
      : h("div", "no any log")
  ])

}