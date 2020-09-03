# MerakiDashboardApi.Body36

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the static route | [optional] 
**subnet** | **String** | The subnet of the static route | [optional] 
**gatewayIp** | **String** | The gateway IP (next hop) of the static route | [optional] 
**enabled** | **Boolean** | The enabled state of the static route | [optional] 
**fixedIpAssignments** | **Object** | The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \&quot;ip\&quot; and \&quot;name\&quot; string fields. See the sample request/response for more details. | [optional] 
**reservedIpRanges** | [**[NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges]**](NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges.md) | The DHCP reserved IP ranges on the static route | [optional] 
