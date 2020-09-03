# MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **String** | Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any' | [optional] 
**destinationPorts** | **[String]** | An array of ports or port ranges that will be forwarded to the host on the LAN | [optional] 
**allowedIps** | **[String]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any' | [optional] 


<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `icmpPing` (value: `"icmp-ping"`)

* `any` (value: `"any"`)




