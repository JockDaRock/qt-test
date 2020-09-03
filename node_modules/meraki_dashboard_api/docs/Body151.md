# MerakiDashboardApi.Body151

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v2cEnabled** | **Boolean** | Boolean indicating whether SNMP version 2c is enabled for the organization. | [optional] 
**v3Enabled** | **Boolean** | Boolean indicating whether SNMP version 3 is enabled for the organization. | [optional] 
**v3AuthMode** | **String** | The SNMP version 3 authentication mode. Can be either &#x27;MD5&#x27; or &#x27;SHA&#x27;. | [optional] 
**v3AuthPass** | **String** | The SNMP version 3 authentication password. Must be at least 8 characters if specified. | [optional] 
**v3PrivMode** | **String** | The SNMP version 3 privacy mode. Can be either &#x27;DES&#x27; or &#x27;AES128&#x27;. | [optional] 
**v3PrivPass** | **String** | The SNMP version 3 privacy password. Must be at least 8 characters if specified. | [optional] 
**peerIps** | **[String]** | The list of IPv4 addresses that are allowed to access the SNMP server. | [optional] 

<a name="V3AuthModeEnum"></a>
## Enum: V3AuthModeEnum

* `MD5` (value: `"MD5"`)
* `SHA` (value: `"SHA"`)


<a name="V3PrivModeEnum"></a>
## Enum: V3PrivModeEnum

* `DES` (value: `"DES"`)
* `AES128` (value: `"AES128"`)

