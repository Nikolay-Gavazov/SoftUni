function requestValidator(obj) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const uriPattern = /^[\d\w\.\*]+$/gm;
  const messagePattern = /[\s\S]*^[^<>0\\&'"]+$/gm;

  if (!methods.includes(obj.method)) {
    throw Error("Invalid request header: Invalid Method");
  }
  if (!version.includes(obj.version)) {
    throw Error("Invalid request header: Invalid Version");
  }
  if (!uriPattern.exec(obj.uri) || obj.uri == undefined) {
    throw Error("Invalid request header: Invalid URI");
  }
  if (obj.message == undefined) {
    throw Error("Invalid request header: Invalid Message");
  } else if (!messagePattern.exec(obj.message) && obj.message.length > 0) {
    throw Error("Invalid request header: Invalid Message");
  }

  return obj;
}
requestValidator({
  method: "GET",

  uri: "svn.public.catalog",

  version: "HTTP/1.1",
  message: "",
});
