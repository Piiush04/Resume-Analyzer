import fitz

async def extractText(file):
    content = await file.read()
    with fitz.open(stream=content,filetype="pdf") as doc:
        text = " "
        for page in doc:
            text+=page.get_text()
    return text