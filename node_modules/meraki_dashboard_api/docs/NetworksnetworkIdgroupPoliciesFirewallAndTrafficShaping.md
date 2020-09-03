# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesFirewallAndTrafficShaping

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **String** | How firewall and traffic shaping rules are enforced. Can be &#x27;network default&#x27;, &#x27;ignore&#x27; or &#x27;custom&#x27;. | [optional] 
**trafficShapingRules** | [**[NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules]**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingTrafficShapingRules.md) |     An array of traffic shaping rules. Rules are applied in the order that     they are specified in. An empty list (or null) means no rules. Note that     you are allowed a maximum of 8 rules.  | [optional] 
**l3FirewallRules** | [**[NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules]**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL3FirewallRules.md) | An ordered array of the L3 firewall rules | [optional] 
**l7FirewallRules** | [**[NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules]**](NetworksnetworkIdgroupPoliciesFirewallAndTrafficShapingL7FirewallRules.md) | An ordered array of L7 firewall rules | [optional] 

<a name="SettingsEnum"></a>
## Enum: SettingsEnum

* `network default` (value: `"network default"`)
* `ignore` (value: `"ignore"`)
* `custom` (value: `"custom"`)

