;{
  /*
   highlight some elements by adding outline
  */
  const include = new Set([426, 427, 428, 429, 430, 431, 433, 457, 458, 470, 489, 518, 558, 559, 589, 590, 622, 641, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 747, 751, 752, 754, 755, 756])
  const exclude = new Set([757, 759, 761, 765, 768, 770, 772, 773, 774, 778, 780, 782, 786, 793, 798, 803, 805, 810, 815, 827, 828, 834, 839, 843, 847, 850])
  const $els = $('td').filter((i, el) => {
    const val = $(el).attr('value') || ''
    if (val.includes('.')) {
      return false
    }
    const num = Number.parseInt(val, 10)
    if (Number.isFinite(num)) {
      if (num <= 756) {
        return include.has(num)
      } else {
        return !exclude.has(num)
      }
    } else {
      return false
    }
  })
  $els.css('outline', '1px solid red')
}





