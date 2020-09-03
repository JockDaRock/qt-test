# MerakiDashboardApi.Body64

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user | 
**name** | **String** | Name of the user | 
**password** | **String** | The password for this user account | 
**accountType** | **String** | Authorization type for user (currently we only support 802.1X account types, which is the default) | [optional] [default to &#x27;802.1X&#x27;]
**emailPasswordToUser** | **Boolean** | Whether or not Meraki should email the password to user. Default is false. | [optional] 
**authorizations** | [**[NetworksnetworkIdmerakiAuthUsersAuthorizations]**](NetworksnetworkIdmerakiAuthUsersAuthorizations.md) | Authorization zones and expiration dates for the user. | 
