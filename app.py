from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(
    title="PJ Stephen Paul Ministries",
    description="Official website of PJ Stephen Paul Ministries",
    version="1.0.0"
)

# Serve CSS, JavaScript and images
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)

# HTML templates
templates = Jinja2Templates(directory="templates")


# Home page
@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={}
    )


# Health check
@app.get("/health")
async def health():
    return {
        "status": "online",
        "ministry": "PJ Stephen Paul Ministries"
    }