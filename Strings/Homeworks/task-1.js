function rmHtmlTags(param) {
  if (typeof param !== "string") {
    throw new Error("Parameter is not string");
  }

  return param.replace(/(<([^>]+)>)/gi, "");
}

console.log(rmHtmlTags("<p><strong><em>Content</em></strong></p>"));
console.log(
  rmHtmlTags(
    "<li><b>Strict, in which deprecated elements are forbidden</b></li>"
  )
);
