# MerakiDashboardApi.UpdateNetworkApplianceVlan

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the VLAN | [optional] 
**subnet** | **String** | The subnet of the VLAN | [optional] 
**applianceIp** | **String** | The local IP of the appliance on the VLAN | [optional] 
**groupPolicyId** | **String** | The id of the desired group policy to apply to the VLAN | [optional] 
**vpnNatSubnet** | **String** | The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN | [optional] 
**dhcpHandling** | **String** | The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests' | [optional] 
**dhcpRelayServerIps** | **[String]** | The IPs of the DHCP servers that DHCP requests should be relayed to | [optional] 
**dhcpLeaseTime** | **String** | The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week' | [optional] 
**dhcpBootOptionsEnabled** | **Boolean** | Use DHCP boot options specified in other properties | [optional] 
**dhcpBootNextServer** | **String** | DHCP boot option to direct boot clients to the server to load the boot file from | [optional] 
**dhcpBootFilename** | **String** | DHCP boot option for boot filename | [optional] 
**fixedIpAssignments** | **Object** | The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \"ip\" and \"name\" string fields. See the sample request/response for more details. | [optional] 
**reservedIpRanges** | [**[NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges]**](NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges.md) | The DHCP reserved IP ranges on the VLAN | [optional] 
**dnsNameservers** | **String** | The DNS nameservers used for DHCP responses, either \"upstream_dns\", \"google_dns\", \"opendns\", or a newline seperated string of IP addresses or domain names | [optional] 
**dhcpOptions** | [**[NetworksnetworkIdappliancevlansvlanIdDhcpOptions]**](NetworksnetworkIdappliancevlansvlanIdDhcpOptions.md) | The list of DHCP options that will be included in DHCP responses. Each object in the list should have \"code\", \"type\", and \"value\" properties. | [optional] 


<a name="DhcpHandlingEnum"></a>
## Enum: DhcpHandlingEnum


* `runADHCPServer` (value: `"Run a DHCP server"`)

* `relayDHCPToAnotherServer` (value: `"Relay DHCP to another server"`)

* `doNotRespondToDHCPRequests` (value: `"Do not respond to DHCP requests"`)




<a name="DhcpLeaseTimeEnum"></a>
## Enum: DhcpLeaseTimeEnum


* `_30Minutes` (value: `"30 minutes"`)

* `_1Hour` (value: `"1 hour"`)

* `_4Hours` (value: `"4 hours"`)

* `_12Hours` (value: `"12 hours"`)

* `_1Day` (value: `"1 day"`)

* `_1Week` (value: `"1 week"`)




