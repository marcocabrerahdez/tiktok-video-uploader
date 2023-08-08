import random
import requests
from PIL import Image
from io import BytesIO


def fetch_country_codes():
    codes_url = "https://flagcdn.com/en/codes.json"
    response = requests.get(codes_url)
    country_codes = response.json()
    return country_codes


def generate_flag(country_name, flag_image):
    # Create a new image with flag and country name
    composite_image = Image.new(
        'RGBA', (flag_image.width, flag_image.height + 30), (255, 255, 255, 0))
    composite_image.paste(flag_image, (0, 0))

    return composite_image


def generate_random_flag_with_name():
    country_codes = fetch_country_codes()
    # Get a random key from the dictionary
    random_code = random.choice(list(country_codes.keys()))
    # Get the corresponding country name
    country_name = country_codes[random_code]
    flag_url = f"https://flagcdn.com/256x192/{random_code}.png"

    flag_response = requests.get(flag_url)

    # Check if the response contains valid image data
    if flag_response.status_code == 200 and flag_response.content:
        flag_image = Image.open(BytesIO(flag_response.content))
        composite_image = generate_flag(country_name, flag_image)

        return composite_image, country_name
    else:
        print("Failed to fetch or identify the image.")
        return None, None
