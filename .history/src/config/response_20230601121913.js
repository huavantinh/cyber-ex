//200
const successCode = (res, data, message) => {
  res.status(200).json({
    message,
    content: data,
  });
};

//400

//500
