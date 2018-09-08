;{
  const vals = [896, 891, 888, 873, 870, 867, 849, 840, 835, 832, 830, 825, 795, 792, 775, 769, 755, 747]
  const set = new Set(vals.map(val => String(val)))
  const $els = $('td').filter((index, el)=> set.has($(el).attr('value')))
  $els.css('outline', '1px solid red')
}





