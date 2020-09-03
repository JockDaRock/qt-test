# MerakiDashboardApi.UpdateNetworkWirelessSsidTrafficShapingRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trafficShapingEnabled** | **Boolean** | Whether traffic shaping rules are applied to clients on your SSID. | [optional] 
**defaultRulesEnabled** | **Boolean** |     Whether default traffic shaping rules are enabled (true) or disabled (false).     There are 4 default rules, which can     be seen on your network's traffic shaping page. Note that default rules     count against the rule limit of 8.  | [optional] 
**rules** | [**[NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules]**](NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules.md) |     An array of traffic shaping rules. Rules are applied in the order that     they are specified in. An empty list (or null) means no rules. Note that     you are allowed a maximum of 8 rules.  | [optional] 


