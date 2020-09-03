# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **String** | How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'. | [optional] 
**trafficShapingRules** | [**[NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules]**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules.md) |     An array of traffic shaping rules. Rules are applied in the order that     they are specified in. An empty list (or null) means no rules. Note that     you are allowed a maximum of 8 rules.  | [optional] 
**l3FirewallRules** | [**[NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules]**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules.md) | An ordered array of the L3 firewall rules | [optional] 
**l7FirewallRules** | [**[NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules]**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules.md) | An ordered array of L7 firewall rules | [optional] 


<a name="SettingsEnum"></a>
## Enum: SettingsEnum


* `networkDefault` (value: `"network default"`)

* `ignore` (value: `"ignore"`)

* `custom` (value: `"custom"`)




