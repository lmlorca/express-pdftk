const pdf = require("node-pdftk");
const app = require("express")();

app.use(require("body-parser").json());

const PORT = 5000;
const TEMPLATE_PATH = "../template/template.pdf";
const ENDPOINT = process.env.ENDPOINT || "/api/pdftk";

app.post(ENDPOINT, async (req, res) => {
  const body = req.body;

  pdf
    .input(TEMPLATE_PATH)
    .fillForm(body.fields)
    .output()
    .then((buffer) => {
      res.contentType("application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${body.fileName || "output"}.pdf`
      );
      return res.status(200).send(buffer);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send(err.message);
    });
});

app.listen(PORT, () => {
  console.log("PDFtk Server Started.");
});
