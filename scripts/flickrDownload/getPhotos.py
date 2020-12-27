#!/usr/bin/python

import flickr_api
import os
import json
from PIL import Image
from resizeimage import resizeimage

def writeJSON(data):
    file = os.path.join('data', 'index.json')
    with open(file, 'w') as outfile:
        json.dump(data, outfile)

#set creds for api
flickr_api.set_keys(api_key = os.getenv('API_KEY'), api_secret = os.getenv('API_SECRET'))

#build data and photos directories to hold our output
if not os.path.exists('photos'):
    os.makedirs('photos')
if not os.path.exists('data'):
    os.makedirs('data')

#start building json
data = {}
data['title'] = 'S3 Photo Album'
data['albums'] = []

#get our user
user = flickr_api.Person.findByUserName('rayterrill')
sets = user.getPhotosets()

#
# TESTING - TAKE THIS OUT
#
o = 0
for s in sets:
    if o == 4:
        break
    title = s.title.replace('/', '-')
    print("Working on " + title + "...")

    fullDir = os.path.join('photos', title)

    #create directories to hold photos
    if not os.path.exists(fullDir):
        os.makedirs(fullDir)
    
    photos = s.getPhotos()

    photosArray = []

    for p in photos:
        #download file from flickr if it doesnt exist
        fullFilename = os.path.join(fullDir, p.id)
        if not os.path.exists(fullFilename + '.jpg'):
            p.save(fullFilename, size_label = 'Original')

        #create a thumbnail of the file if it doesnt exist
        thumbnailFilename = os.path.join(os.path.dirname(fullFilename), os.path.basename(fullFilename) + '_thumb.jpg')
        if not os.path.exists(thumbnailFilename):
            fd_img = open(fullFilename + '.jpg', 'r')
            img = Image.open(fd_img)
            img = resizeimage.resize_thumbnail(img, [500, 380])
            img.save(thumbnailFilename, img.format)
            fd_img.close()

        #build json representation of our photo for the api
        photoJSON = {}
        photoJSON['name'] = p.id
        photoJSON['title'] = p.title
        #append JSON to photosArray
        photosArray.append(photoJSON)
    
    #build json for album - add header + photos
    data['albums'].append({
        'title': title,
        'header': s.primary,
        'photos': photosArray
    })
    o = o + 1

writeJSON(data)