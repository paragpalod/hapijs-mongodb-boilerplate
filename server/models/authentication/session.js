module.exports = function (Schema) {
  const Session = new Schema({
    token: {
      type: String
    },
    expiresIn: {
      type: Number,
      required: true
    },
    userID: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }, { timestamps: true });

  return Session;
};
