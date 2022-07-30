function convertHTML(str) {
    const html = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str
        .split('')
        .map(each => html[each] || each)
        .join('');
  }
  
  console.log(("Dolce & Gabbana"));

/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/