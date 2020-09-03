# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesBonjourForwarding

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **String** | How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'. | [optional] 
**rules** | [**[NetworksnetworkIdgroupPoliciesBonjourForwardingRules]**](NetworksnetworkIdgroupPoliciesBonjourForwardingRules.md) | A list of the Bonjour forwarding rules for your group policy. If 'settings' is set to 'custom', at least one rule must be specified. | [optional] 


<a name="SettingsEnum"></a>
## Enum: SettingsEnum


* `networkDefault` (value: `"network default"`)

* `ignore` (value: `"ignore"`)

* `custom` (value: `"custom"`)




