//200
const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    content: data,
  });
};

//400
const errorCode = (res, data, message) => {
  res.status(400).json({
    message,
    content: data,
  });
};
//500
const errorCode = (res, data, message) => {
  res.status(400).json({
    message,
    content: data,
  });
};
