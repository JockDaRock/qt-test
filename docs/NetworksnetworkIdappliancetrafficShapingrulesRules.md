# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingrulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitions** | [**[NetworksnetworkIdappliancetrafficShapingrulesDefinitions]**](NetworksnetworkIdappliancetrafficShapingrulesDefinitions.md) |     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.  | 
**perClientBandwidthLimits** | [**NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits**](NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits.md) |  | [optional] 
**dscpTagValue** | **Number** |     The DSCP tag applied by your rule. null means &#x27;Do not change DSCP tag&#x27;.     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.  | [optional] 
**priority** | **String** |     A string, indicating the priority level for packets bound to your rule.     Can be &#x27;low&#x27;, &#x27;normal&#x27; or &#x27;high&#x27;.  | [optional] 
