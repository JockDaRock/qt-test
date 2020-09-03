# MerakiDashboardApi.NetworksnetworkIdappliancefirewallportForwardingRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A descriptive name for the rule | [optional] 
**lanIp** | **String** | The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN | 
**uplink** | **String** | The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both') | [optional] 
**publicPort** | **String** | A port or port ranges that will be forwarded to the host on the LAN | 
**localPort** | **String** | A port or port ranges that will receive the forwarded traffic from the WAN | 
**allowedIps** | **[String]** | An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any) | 
**protocol** | **String** | TCP or UDP | 


<a name="UplinkEnum"></a>
## Enum: UplinkEnum


* `internet1` (value: `"internet1"`)

* `internet2` (value: `"internet2"`)

* `both` (value: `"both"`)




<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)




