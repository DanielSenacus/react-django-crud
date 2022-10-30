import ipinfo

def getUbication():
    access_token = '47d4934d2c5e83'
    handler = ipinfo.getHandler(access_token)
    details = handler.getDetails()
    ubication = '{},{},{}'.format(details.country_name,details.region,details.city)
    
    return ubication

