# MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToOneNatRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A descriptive name for the rule | [optional] 
**publicIp** | **String** | The IP address that will be used to access the internal resource from the WAN | [optional] 
**lanIp** | **String** | The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN | 
**uplink** | **String** | The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2') | [optional] 
**allowedInbound** | [**[NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound]**](NetworksnetworkIdappliancefirewalloneToOneNatRulesAllowedInbound.md) | The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource | [optional] 


<a name="UplinkEnum"></a>
## Enum: UplinkEnum


* `internet1` (value: `"internet1"`)

* `internet2` (value: `"internet2"`)




