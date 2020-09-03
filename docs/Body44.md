# MerakiDashboardApi.Body44

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the VLAN | [optional] 
**subnet** | **String** | The subnet of the VLAN | [optional] 
**applianceIp** | **String** | The local IP of the appliance on the VLAN | [optional] 
**groupPolicyId** | **String** | The id of the desired group policy to apply to the VLAN | [optional] 
**vpnNatSubnet** | **String** | The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN | [optional] 
**dhcpHandling** | **String** | The appliance&#x27;s handling of DHCP requests on this VLAN. One of: &#x27;Run a DHCP server&#x27;, &#x27;Relay DHCP to another server&#x27; or &#x27;Do not respond to DHCP requests&#x27; | [optional] 
**dhcpRelayServerIps** | **[String]** | The IPs of the DHCP servers that DHCP requests should be relayed to | [optional] 
**dhcpLeaseTime** | **String** | The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: &#x27;30 minutes&#x27;, &#x27;1 hour&#x27;, &#x27;4 hours&#x27;, &#x27;12 hours&#x27;, &#x27;1 day&#x27; or &#x27;1 week&#x27; | [optional] 
**dhcpBootOptionsEnabled** | **Boolean** | Use DHCP boot options specified in other properties | [optional] 
**dhcpBootNextServer** | **String** | DHCP boot option to direct boot clients to the server to load the boot file from | [optional] 
**dhcpBootFilename** | **String** | DHCP boot option for boot filename | [optional] 
**fixedIpAssignments** | **Object** | The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \&quot;ip\&quot; and \&quot;name\&quot; string fields. See the sample request/response for more details. | [optional] 
**reservedIpRanges** | [**[NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges]**](NetworksnetworkIdappliancestaticRoutesstaticRouteIdReservedIpRanges.md) | The DHCP reserved IP ranges on the VLAN | [optional] 
**dnsNameservers** | **String** | The DNS nameservers used for DHCP responses, either \&quot;upstream_dns\&quot;, \&quot;google_dns\&quot;, \&quot;opendns\&quot;, or a newline seperated string of IP addresses or domain names | [optional] 
**dhcpOptions** | [**[NetworksnetworkIdappliancevlansvlanIdDhcpOptions]**](NetworksnetworkIdappliancevlansvlanIdDhcpOptions.md) | The list of DHCP options that will be included in DHCP responses. Each object in the list should have \&quot;code\&quot;, \&quot;type\&quot;, and \&quot;value\&quot; properties. | [optional] 

<a name="DhcpHandlingEnum"></a>
## Enum: DhcpHandlingEnum

* `Run a DHCP server` (value: `"Run a DHCP server"`)
* `Relay DHCP to another server` (value: `"Relay DHCP to another server"`)
* `Do not respond to DHCP requests` (value: `"Do not respond to DHCP requests"`)


<a name="DhcpLeaseTimeEnum"></a>
## Enum: DhcpLeaseTimeEnum

* `30 minutes` (value: `"30 minutes"`)
* `1 hour` (value: `"1 hour"`)
* `4 hours` (value: `"4 hours"`)
* `12 hours` (value: `"12 hours"`)
* `1 day` (value: `"1 day"`)
* `1 week` (value: `"1 week"`)

