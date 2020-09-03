# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of this performance class. Must be one of: 'builtin' or 'custom' | 
**builtinPerformanceClassName** | **String** | Name of builtin performance class, must be present when performanceClass type is 'builtin', and value must be one of: 'VoIP' | [optional] 
**customPerformanceClassId** | **String** | ID of created custom performance class, must be present when performanceClass type is 'custom' | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `builtin` (value: `"builtin"`)

* `custom` (value: `"custom"`)




<a name="BuiltinPerformanceClassNameEnum"></a>
## Enum: BuiltinPerformanceClassNameEnum


* `voIP` (value: `"VoIP"`)




