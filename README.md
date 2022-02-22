# Express PDFtk

Docker image to spin up a simple Express.js HTTP endpoint to fill out PDF forms
through JSON request body.

## Example usage

`docker run -it -v $(pwd)/template:/template -e ENDPOINT="/fill-pdf" -p 8000:5000 express-pdftk`

- `-v /path-to-file/:/template` (Required) `/path-to-file/` Must contain a pdf
  file named `template.pdf`
- `-e ENDPOINT` (Optional) Name of the api route - defaults to `api/pdftk`

### Make POST request to the endpoint

- `POST http://localhost:5000/api/pdftk`

### Request Body (JSON)

```json
{
  "fileName": "my-file", // defaults to "output"
  "fields": {
    "Name": "John Doe",
    "Checked": "Yes"
  }
}
```

#### Returns

PDF Document
