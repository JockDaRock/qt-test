# MerakiDashboardApi.Body76

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **String** | The type of SNMP access. Can be one of &#x27;none&#x27; (disabled), &#x27;community&#x27; (V1/V2c), or &#x27;users&#x27; (V3). | [optional] 
**communityString** | **String** | The SNMP community string. Only relevant if &#x27;access&#x27; is set to &#x27;community&#x27;. | [optional] 
**users** | [**[NetworksnetworkIdsnmpUsers]**](NetworksnetworkIdsnmpUsers.md) | The list of SNMP users. Only relevant if &#x27;access&#x27; is set to &#x27;users&#x27;. | [optional] 

<a name="AccessEnum"></a>
## Enum: AccessEnum

* `none` (value: `"none"`)
* `community` (value: `"community"`)
* `users` (value: `"users"`)

