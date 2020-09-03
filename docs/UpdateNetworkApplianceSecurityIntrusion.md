# MerakiDashboardApi.UpdateNetworkApplianceSecurityIntrusion

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged) | [optional] 
**idsRulesets** | **String** | Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved | [optional] 
**protectedNetworks** | [**NetworksnetworkIdappliancesecurityintrusionProtectedNetworks**](NetworksnetworkIdappliancesecurityintrusionProtectedNetworks.md) |  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `prevention` (value: `"prevention"`)

* `detection` (value: `"detection"`)

* `disabled` (value: `"disabled"`)




<a name="IdsRulesetsEnum"></a>
## Enum: IdsRulesetsEnum


* `connectivity` (value: `"connectivity"`)

* `balanced` (value: `"balanced"`)

* `security` (value: `"security"`)




