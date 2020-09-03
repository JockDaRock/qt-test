# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapinguplinkSelectionPerformanceClass

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of this performance class. Must be one of: &#x27;builtin&#x27; or &#x27;custom&#x27; | 
**builtinPerformanceClassName** | **String** | Name of builtin performance class, must be present when performanceClass type is &#x27;builtin&#x27;, and value must be one of: &#x27;VoIP&#x27; | [optional] 
**customPerformanceClassId** | **String** | ID of created custom performance class, must be present when performanceClass type is &#x27;custom&#x27; | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `builtin` (value: `"builtin"`)
* `custom` (value: `"custom"`)


<a name="BuiltinPerformanceClassNameEnum"></a>
## Enum: BuiltinPerformanceClassNameEnum

* `VoIP` (value: `"VoIP"`)

