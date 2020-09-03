# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesSchedulingWednesday

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the schedule is active (true) or inactive (false) during the time specified between &#x27;from&#x27; and &#x27;to&#x27;. Defaults to true. | [optional] 
**from** | **String** | The time, from &#x27;00:00&#x27; to &#x27;24:00&#x27;. Must be less than the time specified in &#x27;to&#x27;. Defaults to &#x27;00:00&#x27;. Only 30 minute increments are allowed. | [optional] 
**to** | **String** | The time, from &#x27;00:00&#x27; to &#x27;24:00&#x27;. Must be greater than the time specified in &#x27;from&#x27;. Defaults to &#x27;24:00&#x27;. Only 30 minute increments are allowed. | [optional] 
