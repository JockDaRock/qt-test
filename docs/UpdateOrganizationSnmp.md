# MerakiDashboardApi.UpdateOrganizationSnmp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v2cEnabled** | **Boolean** | Boolean indicating whether SNMP version 2c is enabled for the organization. | [optional] 
**v3Enabled** | **Boolean** | Boolean indicating whether SNMP version 3 is enabled for the organization. | [optional] 
**v3AuthMode** | **String** | The SNMP version 3 authentication mode. Can be either 'MD5' or 'SHA'. | [optional] 
**v3AuthPass** | **String** | The SNMP version 3 authentication password. Must be at least 8 characters if specified. | [optional] 
**v3PrivMode** | **String** | The SNMP version 3 privacy mode. Can be either 'DES' or 'AES128'. | [optional] 
**v3PrivPass** | **String** | The SNMP version 3 privacy password. Must be at least 8 characters if specified. | [optional] 
**peerIps** | **[String]** | The list of IPv4 addresses that are allowed to access the SNMP server. | [optional] 


<a name="V3AuthModeEnum"></a>
## Enum: V3AuthModeEnum


* `mD5` (value: `"MD5"`)

* `SHA` (value: `"SHA"`)




<a name="V3PrivModeEnum"></a>
## Enum: V3PrivModeEnum


* `DES` (value: `"DES"`)

* `aES128` (value: `"AES128"`)




