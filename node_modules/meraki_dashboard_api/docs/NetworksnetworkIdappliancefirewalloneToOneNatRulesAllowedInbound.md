# MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **String** | Either of the following: &#x27;tcp&#x27;, &#x27;udp&#x27;, &#x27;icmp-ping&#x27; or &#x27;any&#x27; | [optional] 
**destinationPorts** | **[String]** | An array of ports or port ranges that will be forwarded to the host on the LAN | [optional] 
**allowedIps** | **[String]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or &#x27;any&#x27; | [optional] 

<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum

* `tcp` (value: `"tcp"`)
* `udp` (value: `"udp"`)
* `icmp-ping` (value: `"icmp-ping"`)
* `any` (value: `"any"`)

