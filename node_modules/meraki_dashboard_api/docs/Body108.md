# MerakiDashboardApi.Body108

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Boolean value to enable or disable alternate management interface | [optional] 
**vlanId** | **Number** | Alternate management interface VLAN, must be between 1 and 4094 | [optional] 
**protocols** | **[String]** | Can be one or more of the following values: &#x27;radius&#x27;, &#x27;snmp&#x27;, &#x27;syslog&#x27; or &#x27;ldap&#x27; | [optional] 
**accessPoints** | [**[NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints]**](NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints.md) | Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put &#x27;accessPoints&#x27; in the body when updating template networks. Also, an empty &#x27;accessPoints&#x27; array will remove all previous static IP assignments | [optional] 

<a name="[ProtocolsEnum]"></a>
## Enum: [ProtocolsEnum]

* `radius` (value: `"radius"`)
* `snmp` (value: `"snmp"`)
* `syslog` (value: `"syslog"`)
* `ldap` (value: `"ldap"`)

