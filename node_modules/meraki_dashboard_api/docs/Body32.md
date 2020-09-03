# MerakiDashboardApi.Body32

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | Set mode to &#x27;disabled&#x27;/&#x27;detection&#x27;/&#x27;prevention&#x27; (optional - omitting will leave current config unchanged) | [optional] 
**idsRulesets** | **String** | Set the detection ruleset &#x27;connectivity&#x27;/&#x27;balanced&#x27;/&#x27;security&#x27; (optional - omitting will leave current config unchanged). Default value is &#x27;balanced&#x27; if none currently saved | [optional] 
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

