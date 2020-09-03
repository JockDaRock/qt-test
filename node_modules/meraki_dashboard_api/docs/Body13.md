# MerakiDashboardApi.Body13

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcpMode** | **String** | The DHCP mode options for the switch interface (&#x27;dhcpDisabled&#x27;, &#x27;dhcpRelay&#x27; or &#x27;dhcpServer&#x27;) | [optional] 
**dhcpRelayServerIps** | **[String]** | The DHCP relay server IPs to which DHCP packets would get relayed for the switch interface | [optional] 
**dhcpLeaseTime** | **String** | The DHCP lease time config for the dhcp server running on switch interface (&#x27;30 minutes&#x27;, &#x27;1 hour&#x27;, &#x27;4 hours&#x27;, &#x27;12 hours&#x27;, &#x27;1 day&#x27; or &#x27;1 week&#x27;) | [optional] 
**dnsNameserversOption** | **String** | The DHCP name server option for the dhcp server running on the switch interface (&#x27;googlePublicDns&#x27;, &#x27;openDns&#x27; or &#x27;custom&#x27;) | [optional] 
**dnsCustomNameservers** | **[String]** | The DHCP name server IPs when DHCP name server option is &#x27;custom&#x27; | [optional] 
**bootOptionsEnabled** | **Boolean** | Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch interface | [optional] 
**bootNextServer** | **String** | The PXE boot server IP for the DHCP server running on the switch interface | [optional] 
**bootFileName** | **String** | The PXE boot server filename for the DHCP server running on the switch interface | [optional] 
**dhcpOptions** | [**[DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions]**](DevicesserialswitchroutinginterfacesinterfaceIddhcpDhcpOptions.md) | Array of DHCP options consisting of code, type and value for the DHCP server running on the switch interface | [optional] 
**reservedIpRanges** | [**[DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges]**](DevicesserialswitchroutinginterfacesinterfaceIddhcpReservedIpRanges.md) | Array of DHCP reserved IP assignments for the DHCP server running on the switch interface | [optional] 
**fixedIpAssignments** | [**[DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments]**](DevicesserialswitchroutinginterfacesinterfaceIddhcpFixedIpAssignments.md) | Array of DHCP fixed IP assignments for the DHCP server running on the switch interface | [optional] 

<a name="DhcpModeEnum"></a>
## Enum: DhcpModeEnum

* `dhcpDisabled` (value: `"dhcpDisabled"`)
* `dhcpRelay` (value: `"dhcpRelay"`)
* `dhcpServer` (value: `"dhcpServer"`)


<a name="DhcpLeaseTimeEnum"></a>
## Enum: DhcpLeaseTimeEnum

* `30 minutes` (value: `"30 minutes"`)
* `1 hour` (value: `"1 hour"`)
* `4 hours` (value: `"4 hours"`)
* `12 hours` (value: `"12 hours"`)
* `1 day` (value: `"1 day"`)
* `1 week` (value: `"1 week"`)


<a name="DnsNameserversOptionEnum"></a>
## Enum: DnsNameserversOptionEnum

* `googlePublicDns` (value: `"googlePublicDns"`)
* `openDns` (value: `"openDns"`)
* `custom` (value: `"custom"`)

