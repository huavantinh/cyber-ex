

const createReview = async (req, res) => {
      let data = await  createReview.create{
        user_id: 2,
      
      }
      console.log("test data =>>>> ", data);
      res.send(data);
    }

module.exports = createReview