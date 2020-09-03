# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesBonjourForwarding

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | **String** | How Bonjour rules are applied. Can be &#x27;network default&#x27;, &#x27;ignore&#x27; or &#x27;custom&#x27;. | [optional] 
**rules** | [**[NetworksnetworkIdgroupPoliciesBonjourForwardingRules]**](NetworksnetworkIdgroupPoliciesBonjourForwardingRules.md) | A list of the Bonjour forwarding rules for your group policy. If &#x27;settings&#x27; is set to &#x27;custom&#x27;, at least one rule must be specified. | [optional] 

<a name="SettingsEnum"></a>
## Enum: SettingsEnum

* `network default` (value: `"network default"`)
* `ignore` (value: `"ignore"`)
* `custom` (value: `"custom"`)

