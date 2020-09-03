# MerakiDashboardApi.NetworksnetworkIdappliancefirewalloneToManyNatRulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicIp** | **String** | The IP address that will be used to access the internal resource from the WAN | 
**uplink** | **String** | The physical WAN interface on which the traffic will arrive (&#x27;internet1&#x27; or, if available, &#x27;internet2&#x27;) | 
**portRules** | [**[NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules]**](NetworksnetworkIdappliancefirewalloneToManyNatRulesPortRules.md) | An array of associated forwarding rules | 

<a name="UplinkEnum"></a>
## Enum: UplinkEnum

* `internet1` (value: `"internet1"`)
* `internet2` (value: `"internet2"`)

