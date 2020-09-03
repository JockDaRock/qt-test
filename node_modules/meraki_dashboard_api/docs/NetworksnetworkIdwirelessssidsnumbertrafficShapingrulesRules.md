# MerakiDashboardApi.NetworksnetworkIdwirelessssidsnumbertrafficShapingrulesRules

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitions** | [**[NetworksnetworkIdappliancetrafficShapingrulesDefinitions]**](NetworksnetworkIdappliancetrafficShapingrulesDefinitions.md) |     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.  | 
**perClientBandwidthLimits** | [**NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits**](NetworksnetworkIdappliancetrafficShapingrulesPerClientBandwidthLimits.md) |  | [optional] 
**dscpTagValue** | **Number** |     The DSCP tag applied by your rule. null means &#x27;Do not change DSCP tag&#x27;.     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.  | [optional] 
**pcpTagValue** | **Number** |     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).     null means &#x27;Do not set PCP tag&#x27;.  | [optional] 
