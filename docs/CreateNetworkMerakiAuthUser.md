# MerakiDashboardApi.CreateNetworkMerakiAuthUser

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Email address of the user | 
**name** | **String** | Name of the user | 
**password** | **String** | The password for this user account | 
**accountType** | **String** | Authorization type for user. Can be either 'Guest' or '802.1X'. Defaults to '802.1X'. | [optional] [default to '802.1X']
**emailPasswordToUser** | **Boolean** | Whether or not Meraki should email the password to user. Default is false. | [optional] 
**authorizations** | [**[NetworksnetworkIdmerakiAuthUsersAuthorizations]**](NetworksnetworkIdmerakiAuthUsersAuthorizations.md) | Authorization zones and expiration dates for the user. | 


<a name="AccountTypeEnum"></a>
## Enum: AccountTypeEnum


* `guest` (value: `"Guest"`)

* `_8021X` (value: `"802.1X"`)




