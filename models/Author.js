const Schema = mongoose.Schema;
const AuthorSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First Name is required.",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last Name is required.",
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

AuthorSchmea.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
