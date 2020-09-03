# MerakiDashboardApi.UpdateDeviceSwitchRoutingInterfaceDhcp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dhcpMode** | **String** | The DHCP mode options for the switch interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer') | [optional] 
**dhcpRelayServerIps** | **[String]** | The DHCP relay server IPs to which DHCP packets would get relayed for the switch interface | [optional] 
**dhcpLeaseTime** | **String** | The DHCP lease time config for the dhcp server running on switch interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week') | [optional] 
**dnsNameserversOption** | **String** | The DHCP name server option for the dhcp server running on the switch interface ('googlePublicDns', 'openDns' or 'custom') | [optional] 
**dnsCustomNameservers** | **[String]** | The DHCP name server IPs when DHCP name server option is 'custom' | [optional] 
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


* `_30Minutes` (value: `"30 minutes"`)

* `_1Hour` (value: `"1 hour"`)

* `_4Hours` (value: `"4 hours"`)

* `_12Hours` (value: `"12 hours"`)

* `_1Day` (value: `"1 day"`)

* `_1Week` (value: `"1 week"`)




<a name="DnsNameserversOptionEnum"></a>
## Enum: DnsNameserversOptionEnum


* `googlePublicDns` (value: `"googlePublicDns"`)

* `openDns` (value: `"openDns"`)

* `custom` (value: `"custom"`)




