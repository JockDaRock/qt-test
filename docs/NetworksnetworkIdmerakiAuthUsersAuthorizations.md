# MerakiDashboardApi.NetworksnetworkIdmerakiAuthUsersAuthorizations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssidNumber** | **Number** | SSID for which the user is being authorized. Must be configured for the user's given accountType. While users may ultimately be authorized for different types of SSIDs, currently, POST /merakiAuthUsers only supports authorizing a user for one type of SSID. Use PUT /merakiAuthUsers/{merakiAuthUserId} to add authorizations for other types of SSIDs. | 
**expiresAt** | **String** | Date for authorization to expire. Set to 'Never' for the authorization to not expire, which is the default. | [optional] [default to 'Never']


