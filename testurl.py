import requests

upload = {
    'img0': open('img.png', 'rb'),
    'img1': open('img.png', 'rb'),
    'img2': open('img.png', 'rb'),
    'img3': open('img.png', 'rb'),
    'img4': open('img.png', 'rb'),
    'img5': open('img.png', 'rb'),
    'img6': open('img.png', 'rb'),
    'img7': open('img.png', 'rb'),
    'img8': open('img.png', 'rb'),
}



resp = requests.post('http://127.0.0.1:8900/api/predict/', files=upload)
print(resp)