const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    // cb(null, new Date().toISOString() + "-" + file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
  // filename: function (req, file, cb) {
  //   const ext = file.mimetype.split("/")[1];
  //   cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
  // },
});

const Filter = function (req, file, cb) {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: Filter });

module.exports = upload;
