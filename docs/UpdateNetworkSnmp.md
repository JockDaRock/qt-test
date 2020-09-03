# MerakiDashboardApi.UpdateNetworkSnmp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **String** | The type of SNMP access. Can be one of 'none' (disabled), 'community' (V1/V2c), or 'users' (V3). | [optional] 
**communityString** | **String** | The SNMP community string. Only relevant if 'access' is set to 'community'. | [optional] 
**users** | [**[NetworksnetworkIdsnmpUsers]**](NetworksnetworkIdsnmpUsers.md) | The list of SNMP users. Only relevant if 'access' is set to 'users'. | [optional] 


<a name="AccessEnum"></a>
## Enum: AccessEnum


* `none` (value: `"none"`)

* `community` (value: `"community"`)

* `users` (value: `"users"`)




