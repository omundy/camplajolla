// exchange carriage returns for line breaks
export function nl2br(str, is_xhtml) {
  if (typeof str === 'undefined' || str === null) {
    return ''
  }
  var breakTag = is_xhtml || typeof is_xhtml === 'undefined' ? '<br />' : '<br>'
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2')
}

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

// Return a custom formatted date
// https://petermorgan.dev/blog/format-blog-post-dates-astro/
export function formatDate(str) {
  let d = ''
  //   console.log(isNaN(Date.parse(str)));
  if (!isNaN(Date.parse(str))) {
    d = new Date(str).toLocaleDateString('en-US', dateOptions)
  }
  //   console.log(d);
  return d
}
