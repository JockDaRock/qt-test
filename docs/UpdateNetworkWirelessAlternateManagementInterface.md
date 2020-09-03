# MerakiDashboardApi.UpdateNetworkWirelessAlternateManagementInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Boolean value to enable or disable alternate management interface | [optional] 
**vlanId** | **Number** | Alternate management interface VLAN, must be between 1 and 4094 | [optional] 
**protocols** | **[String]** | Can be one or more of the following values: 'radius', 'snmp', 'syslog' or 'ldap' | [optional] 
**accessPoints** | [**[NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints]**](NetworksnetworkIdwirelessalternateManagementInterfaceAccessPoints.md) | Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put 'accessPoints' in the body when updating template networks. Also, an empty 'accessPoints' array will remove all previous static IP assignments | [optional] 


<a name="[ProtocolsEnum]"></a>
## Enum: [ProtocolsEnum]


* `radius` (value: `"radius"`)

* `snmp` (value: `"snmp"`)

* `syslog` (value: `"syslog"`)

* `ldap` (value: `"ldap"`)




